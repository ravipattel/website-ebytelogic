import React from 'react'

import Global from './Global'
import BlogHero from './BlogHero'

const Blog = ({ blogs }) => {
  return (
    <div>
      <BlogHero />
      <Global blogs={blogs} />
    </div>
  )
}

export default Blog 
