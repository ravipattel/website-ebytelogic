import React from 'react'
import BlogModal from './BlogModel'

const AddBlogModel = ({ open, onClose, onSuccess }: any) => {

    return (
        <BlogModal open={open} onClose={onClose} onSuccess={onSuccess} />
    )
}

export default AddBlogModel