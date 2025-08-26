import React from 'react'
import CaseStudyInfo from './CaseStudyInfo'
import Sidebar from '@/src/components/Sidebar'

const CaseStudyDetails = () => {
  return (
      <div className="lg:flex bg-[#F0F4F8]">
        <div className="w-72 h-fit lg:sticky lg:top-[92px]">
          <Sidebar />
        </div>
        <div className='overflow-y-auto px-4 md:px-6'>
          <CaseStudyInfo />
        </div>
      </div>
  )
}

export default CaseStudyDetails
