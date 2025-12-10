import React from 'react'
import ServiceDetailsInfo from './ServiceDetailsInfo'

const ServiceDetails = ({ serviceid }) => {
  return (
    <ServiceDetailsInfo meta={serviceid} />
  )
}

export default ServiceDetails

export const runtime = 'edge';