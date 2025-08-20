'use client'
import React from 'react'

import SomSoc from '@/src/views/blogs/som-soc/[slug]'
import { useParams } from 'next/navigation';
import DevelopmentGuide from '@/src/views/blogs/rk3588-guide/[slug]';
import Qa from '@/src/views/blogs/qa/[slug]';
import Gstreamer from '@/src/views/blogs/g-streamer/[slug]';
import MultiViewer from '@/src/views/blogs/multiviewer/[slug]';
import ButtonDebounce from '@/src/views/blogs/button-debounce/[slug]';

const SomSocPage = () => {
  const params = useParams();
  const slug = params.slug;
  console.log("in pages Params object:", params);
  console.log("in pages Slug value:", params.slug);
  return (
    <>
      <>
        {slug === 'som-soc' ? (
          <SomSoc slug={slug} />
        ) : slug === 'rk3588-guide' ? (
          <DevelopmentGuide slug={slug} />
        ) : slug === 'qa' ? (
          <Qa slug={slug} />
        ) : slug === 'g-streamer' ? (
          <Gstreamer slug={slug} />
        ) : slug === 'button-debounce' ? (
          <ButtonDebounce />
        ) : slug === 'multiviewer' ? (
          <MultiViewer slug={slug} />
        )
          : (
            <div>Page not found</div>
          )}
      </>
    </>
  )
}

export default SomSocPage
