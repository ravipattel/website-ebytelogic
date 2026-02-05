"use client";

import React, { useEffect, useState } from "react";
import { useBlogs } from "@/src/hooks/useBlogs";
import { ErrorToast, SuccessToast } from "@/utils/toast";
import Image from "next/image";
import MDEditor from "@uiw/react-md-editor";
import HtmlMarkdownConverter from "@/src/components/HtmlMarkdownConverter";
import { CgSpinner } from "react-icons/cg";

const normalizeHighlights = (input: string): string[] => {
    const value = input.trim();
    try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) return parsed.map(String);
    } catch { }
    return value.split(",").map(v => v.trim()).filter(Boolean);
};

interface BlogModalProps {
    open: boolean;
    blog?: any;
    onClose: () => void;
    onSuccess?: () => void;
}

const BlogModal = ({ open, blog, onClose, onSuccess }: BlogModalProps) => {
    const { createBlog, editBlog, loading, blogs } = useBlogs();
    const isUpdateMode = !!blog;
    const isSubmitting = loading === "blogs/update" || loading === "blogs/add";

    const [errors, setErrors] = useState<any>({});
    const [selectedSuggestion, setSelectedSuggestion] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [form, setForm] = useState({
        slug: "",
        title: "",
        category: "",
        excerpt: "",
        highlights: "",
        content: "",
        imageFile: null as File | null,
        imageUrl: "",
        intro_content: "",
        cta_text: "",
        cta_link: "",
    });

    // Initialize form when blog changes or modal opens
    useEffect(() => {
        if (isUpdateMode && blog) {
            setForm({
                slug: blog.slug || "",
                title: blog.title || "",
                category: blog.category || "",
                excerpt: blog.excerpt || "",
                highlights: (blog.highlights || []).join(", "),
                content: blog.content || "",
                imageFile: null,
                imageUrl: blog.cover_image || "",
                intro_content: blog.intro_content || "",
                cta_text: blog.cta_text || "",
                cta_link: blog.cta_link || "",
            });
            setSuggestions(blog.suggestionsBlog || []);
        } else {
            // Reset form for add mode
            setForm({
                slug: "",
                title: "",
                category: "",
                excerpt: "",
                highlights: "",
                content: "",
                imageFile: null,
                imageUrl: "",
                intro_content: "",
                cta_text: "",
                cta_link: "",
            });
            setSuggestions([]);
        }
        setErrors({});
        setSelectedSuggestion("");
    }, [blog, isUpdateMode, open]);

    const slugExists = blogs?.some((b: any) => b.slug === form.slug && b.slug !== blog?.slug);

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        if (name === "image" && files?.[0]) {
            setForm(prev => ({
                ...prev,
                imageFile: files[0],
            }));
        } else {
            setForm(prev => ({
                ...prev,
                [name]: value,
            }));
        }
        setErrors((prev: any) => ({ ...prev, [name]: null }));
    };

    const handleAddSuggestion = () => {
        if (!selectedSuggestion || selectedSuggestion === form.slug || suggestions.includes(selectedSuggestion)) {
            return;
        }
        setSuggestions(prev => [...prev, selectedSuggestion]);
        setSelectedSuggestion("");
    };

    const handleRemoveSuggestion = (slug: string) => {
        setSuggestions(prev => prev.filter(s => s !== slug));
    };

    const validateForm = () => {
        const err: any = {};
        
        if (!form.slug.trim()) {
            err.slug = "Slug is required";
        } else if (!isUpdateMode && slugExists) {
            err.slug = "Slug already exists";
        }
        
        if (!form.title.trim()) err.title = "Title is required";
        if (!form.category.trim()) err.category = "Category is required";
        if (!form.excerpt.trim()) err.excerpt = "Excerpt is required";
        
        const normalized = normalizeHighlights(form.highlights);
        if (!normalized.length) err.highlights = "Add at least one highlight";
        
        if (!form.content.trim()) err.content = "Content is required";
        if (!form.intro_content.trim()) err.intro_content = "Intro content is required";
        
        if (!form.imageFile && !form.imageUrl) {
            err.image = "Image is required";
        }
        
        return err;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const err = validateForm();
        if (Object.keys(err).length > 0) {
            setErrors(err);
            return;
        }

        try {
            const formData = new FormData();

            const htmlContent = await HtmlMarkdownConverter(form.content);
            const introHtml = await HtmlMarkdownConverter(form.intro_content);

            formData.append("slug", form.slug);
            formData.append("title", form.title);
            formData.append("excerpt", form.excerpt);
            formData.append("content", htmlContent);
            formData.append("category", form.category);
            formData.append("intro_content", introHtml);
            formData.append("cta_text", form.cta_text);
            formData.append("cta_link", form.cta_link);
            formData.append("highlights", JSON.stringify(normalizeHighlights(form.highlights)));
            formData.append("suggestionsBlog", JSON.stringify(suggestions));

            if (isUpdateMode) {
                formData.append("cover_image", blog.cover_image || "");
            }

            if (form.imageFile) {
                formData.append("image", form.imageFile);
            }

            const res: any = isUpdateMode
                ? await editBlog(blog.id, formData)
                : await createBlog(formData);

            if (res?.error) {
                ErrorToast(res.error || `Failed to ${isUpdateMode ? 'update' : 'add'} blog`);
                return;
            }

            SuccessToast(`Blog ${isUpdateMode ? 'updated' : 'added'} successfully`);
            onSuccess?.();
            onClose();
        } catch (error: any) {
            ErrorToast(error.message || "Something went wrong");
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative overflow-auto h-[94vh]">
                <div className="flex items-center justify-between gap-3 bg-white sticky top-0 left-0 p-6">
                    <h2 className="text-xl font-semibold">
                        {isUpdateMode ? "Edit Blog" : "Add New Blog"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black text-xl cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 p-6 !pt-0">
                    {/* SLUG */}
                    <div>
                        <input
                            name="slug"
                            value={form.slug}
                            onChange={handleChange}
                            disabled={isUpdateMode}
                            placeholder="Unique Slug"
                            className={`w-full outline-none border border-gray-300 rounded p-2 ${
                                isUpdateMode ? "bg-gray-100" : ""
                            }`}
                        />
                        {errors.slug && <p className="text-red-500 text-sm">{errors.slug}</p>}
                    </div>

                    {/* TITLE */}
                    <div>
                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Title"
                            className="w-full outline-none border border-gray-300 rounded p-2"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    {/* CATEGORY */}
                    <div>
                        <input
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            placeholder="Category"
                            className="w-full outline-none border border-gray-300 rounded p-2"
                        />
                        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                    </div>

                    {/* EXCERPT */}
                    <div>
                        <input
                            name="excerpt"
                            value={form.excerpt}
                            onChange={handleChange}
                            placeholder="Excerpt"
                            className="w-full outline-none border border-gray-300 rounded p-2"
                        />
                        {errors.excerpt && <p className="text-red-500 text-sm">{errors.excerpt}</p>}
                    </div>

                    {/* HIGHLIGHTS */}
                    <div>
                        <input
                            name="highlights"
                            value={form.highlights}
                            onChange={handleChange}
                            placeholder="Highlights (comma-separated or JSON)"
                            className="w-full outline-none border border-gray-300 rounded p-2"
                        />
                        {errors.highlights && <p className="text-red-500 text-sm">{errors.highlights}</p>}
                    </div>

                    {/* INTRO CONTENT */}
                    <div data-color-mode="light">
                        <label className="text-gray-400">Introduction Section Content</label>
                        <MDEditor
                            value={form.intro_content}
                            height={180}
                            onChange={(val) =>
                                setForm(prev => ({ ...prev, intro_content: val || "" }))
                            }
                        />
                        {errors.intro_content && (
                            <p className="text-red-500 text-sm">{errors.intro_content}</p>
                        )}
                    </div>

                    {/* CTA TEXT */}
                    <div>
                        <input
                            name="cta_text"
                            value={form.cta_text}
                            onChange={handleChange}
                            placeholder="CTA Button Text (eg: Explore Sync Solutions)"
                            className="w-full outline-none border border-gray-300 rounded p-2"
                        />
                    </div>

                    {/* CTA LINK */}
                    <div>
                        <input
                            name="cta_link"
                            value={form.cta_link}
                            onChange={handleChange}
                            placeholder="CTA Button Link (eg: /services/av-sync)"
                            className="w-full outline-none border border-gray-300 rounded p-2"
                        />
                    </div>

                    {/* BLOG SUGGESTIONS */}
                    <div>
                        <div className="flex gap-2">
                            <select
                                className="w-full outline-none border border-gray-300 rounded p-2"
                                value={selectedSuggestion}
                                onChange={(e) => setSelectedSuggestion(e.target.value)}
                            >
                                <option className="text-gray-400 color-gray-400" value="">Select suggested blog slug</option>
                                {blogs
                                    ?.filter(
                                        (b: any) =>
                                            b.slug !== form.slug &&
                                            !suggestions.includes(b.slug)
                                    )
                                    .map((b: any) => (
                                        <option key={b.slug} value={b.slug}>
                                            {b.slug}
                                        </option>
                                    ))}
                            </select>
                            <button
                                type="button"
                                onClick={handleAddSuggestion}
                                className="bg-[#2597f4] text-white px-4 rounded cursor-pointer"
                            >
                                Add
                            </button>
                        </div>
                        {suggestions.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {suggestions.map((slug) => (
                                    <span
                                        key={slug}
                                        className="outline-none border border-gray-300 rounded p-2 py-1 text-sm flex items-center gap-2"
                                    >
                                        {slug}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveSuggestion(slug)}
                                            className="text-red-500"
                                        >
                                            ✕
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* CONTENT */}
                    <div data-color-mode="light">
                        <label className="text-gray-400">Blog Content</label>
                        <MDEditor
                            value={form.content}
                            height={300}
                            onChange={(val) =>
                                setForm(prev => ({
                                    ...prev,
                                    content: val || "",
                                }))
                            }
                            previewOptions={{
                                wrapperElement: { "aria-hidden": "true" } as any
                            }}
                        />
                        {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
                    </div>

                    {/* IMAGE */}
                    <div>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    {/* IMAGE PREVIEW */}
                    <div className="mt-2">
                        {form.imageFile && (
                            <Image
                                src={URL.createObjectURL(form.imageFile)}
                                width={300}
                                height={300}
                                alt="Selected"
                                className="w-32 h-32 object-cover rounded"
                            />
                        )}
                        {!form.imageFile && form.imageUrl && (
                            <Image
                                src={form.imageUrl}
                                width={300}
                                height={300}
                                alt="Existing"
                                className="w-32 h-32 object-cover rounded"
                            />
                        )}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#2597f4] text-white py-2 rounded
             disabled:opacity-60 cursor-pointer
             flex items-center justify-center gap-2"
                    >
                        {isUpdateMode ? "Update Blog" : "Create Blog"}
                        {isSubmitting && <CgSpinner className="animate-spin text-xl" />}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default BlogModal;