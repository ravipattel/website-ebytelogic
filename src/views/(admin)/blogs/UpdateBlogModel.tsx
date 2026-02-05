"use client";

import React from "react";
import BlogModal from "./BlogModel";

interface UpdateBlogModalProps {
    open: boolean;
    blog: any;
    onClose: () => void;
    onSuccess?: () => void;
}

const UpdateBlogModal = ({ open, blog, onClose, onSuccess }: UpdateBlogModalProps) => {
   return (
    <BlogModal open={open} blog={blog} onClose={onClose} onSuccess={onSuccess} />
   )
};

export default UpdateBlogModal;
