import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Subscription = () => {
  return (
    <div className='flex justify-center items-center p-[20px] max-w-[1440px] mx-auto'>
       <PricingTable />
    </div>
  )
}

export default Subscription
