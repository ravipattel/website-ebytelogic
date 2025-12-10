import React from 'react'
import IndustryInfo from './IndustryInfo'


const IndustryDetail = ({ industryId }) => {
  return (
    <div>
      <IndustryInfo meta={industryId} />
    </div>
  )
}

export default IndustryDetail
export const runtime = 'edge';