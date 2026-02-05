"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useBlogs } from "@/src/hooks/useBlogs";
import Button from "@/src/components/Button";
import { BiPlus } from "react-icons/bi";
import AddBlogModal from "./AddBlogModel";
import { PiPencilLine } from "react-icons/pi";
import ConfirmDeleteModal from "@/src/components/ConfirmDeleteModel";
import { ToastContainer } from "react-toastify";
import { ErrorToast, SuccessToast } from "@/utils/toast";
import UpdateBlogModal from "./UpdateBlogModel";
import { GoTrash } from "react-icons/go";

const BlogListPage = () => {
    const { blogs, viewBlogs, deleteBlog, loading } = useBlogs();
    const [openModal, setOpenModal] = useState(false);
    const [editBlog, setEditBlog] = useState<any | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteBlogId, setDeleteBlogId] = useState<string | null>(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        viewBlogs();
    }, []);

    const openDeleteModal = (id: string) => {
        setDeleteBlogId(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!deleteBlogId || deleting) return;

        try {
            setDeleting(true);
            await deleteBlog(deleteBlogId);
            setShowDeleteModal(false);
            await viewBlogs();
            SuccessToast("Blog deleted successfully");
        } catch (error: any) {
            ErrorToast(error.message || "Failed to delete blog");
        } finally {
            setDeleting(false);
            setDeleteBlogId(null);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-semibold">All Blogs</h1>
                <Button onClick={() => setOpenModal(true)} className="flex gap-2">
                    <BiPlus className="text-2xl" /> Add New Blog
                </Button>
            </div>

            {/* Blog List */}
            <div className="p-6 bg-white rounded-lg shadow-md h-[85vh] overflow-auto">
                <div className="grid sm:grid-cols-3 gap-8">
                    {blogs.map((blog: any) => (
                        <div
                            key={blog.id}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <div className="flex justify-between p-3">
                                <p className="text-xs text-gray-500">
                                    {new Date(blog.created_at).toLocaleString()}
                                </p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() =>
                                            openDeleteModal(blog.id)
                                        }
                                        className="size-7 bg-red-50 hover:bg-red-100 rounded-full flex items-center justify-center "
                                    >
                                        <GoTrash className="w-4 h-4 text-red-500 cursor-pointer" />
                                    </button>
                                    <button
                                        onClick={() => setEditBlog(blog)} className="size-7 bg-blue-50 hover:bg-blue-100 rounded-full flex items-center justify-center ">
                                        <PiPencilLine className="w-4 h-4 text-blue-500 cursor-pointer" />
                                    </button>
                                </div>
                            </div>

                            {blog.cover_image && (
                                <Image
                                    src={blog.cover_image}
                                    alt={blog.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover"
                                />
                            )}

                            <div className="p-4 space-y-2">
                                <h2 className="font-semibold">
                                    {blog.title}
                                </h2>
                                <p className="text-xs text-gray-500">
                                    <span className="font-bold">Slug : </span> {blog.slug}
                                </p>
                                <p className="text-xs text-gray-500">
                                    <span className="font-bold">Category : </span> {blog.category}
                                </p>
                                {/* {Array.isArray(blog.highlights) && blog.highlights.length > 0 &&
                                    (<div className="flex flex-wrap gap-2">
                                        {blog.highlights.map((tag: string, index: number) => (<span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200" >
                                            {tag}
                                        </span>
                                        ))}
                                    </div>)} */}
                                <p className="text-xs text-gray-500">Suggested Blogs : -</p>
                                {Array.isArray(blog.suggestionsBlog) && blog.suggestionsBlog.length > 0 &&
                                    (<div className="flex flex-wrap gap-2">
                                        {blog.suggestionsBlog.map((tag: string, index: number) => (<span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200" >
                                            {tag}
                                        </span>
                                        ))}
                                    </div>)}
                            </div>
                        </div>
                    ))}
                </div>

                {loading === "blogs/getAll" ? (
                    <p className="text-center text-gray-500 mt-10">
                        Loading...
                    </p>
                ) : (
                    blogs.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">
                            No blogs found.
                        </p>
                    )
                )}
            </div>

            {/* Add Blog Modal */}
            {openModal && (
                <AddBlogModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    onSuccess={viewBlogs}
                />
            )}

            {editBlog && (
                <UpdateBlogModal
                    key={editBlog.id}
                    open={!!editBlog}
                    blog={editBlog}
                    onClose={() => setEditBlog(null)}
                    onSuccess={viewBlogs}
                />
            )}

            {/* Delete Modal */}
            <ConfirmDeleteModal
                isOpen={showDeleteModal}
                onClose={() => {
                    setShowDeleteModal(false);
                    setDeleteBlogId(null);
                }}
                onConfirm={confirmDelete}
                loading={deleting}
                title="Delete Blog"
                description="Are you sure you want to delete this blog?"
            />
            <ToastContainer className="!z-[999999]" />
        </div>
    );
};

export default BlogListPage;
