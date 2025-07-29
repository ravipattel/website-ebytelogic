import React from 'react'

import BlogDetailsHero from './BlogDetailsHero'
import BlogDescription from './BlogDescription'
import BlogExecutive from './BlogExecutive'
import BlogCoreTech from './BlogCoreTech'
import BlogHardware from './BlogHardware'
import BlogPainPoints from './BlogPainPoints'
import BlogCaseStudies from './BlogCaseStudies'
import BlogBsp from './BlogBsp'

const BlogDetails = () => {
  return (
    <div>
      <BlogDetailsHero />
      <BlogDescription/>
      <BlogExecutive/>
      <BlogCoreTech/>
      <BlogHardware/>
      <BlogPainPoints/>
      <BlogCaseStudies/>
      <BlogBsp/>
    </div>  
  )
}

export default BlogDetails 
