"use client"
import React, { useEffect } from 'react'
import StatCard from "./StatCard";
import { FiBookOpen, FiUser } from 'react-icons/fi';
import useBlogs from '@/src/hooks/useBlogs';

const DashboardMain = () => {

  const { blogs, viewBlogs } = useBlogs();

  useEffect(() => {
    viewBlogs();
  }, [viewBlogs]);

  return (
    <div className="space-y-8">

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="1,240" icon={<FiUser />} />
        <StatCard title="Blogs" value={blogs.length.toString()} icon={<FiBookOpen />} />
      </div>
    </div>
  );
}

export default DashboardMain;
