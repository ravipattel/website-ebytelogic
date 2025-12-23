import React from 'react'
import Login from "@/src/views/login";
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage
