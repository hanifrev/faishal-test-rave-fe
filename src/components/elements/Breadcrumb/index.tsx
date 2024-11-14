import { ChevronRight } from 'assets'
import React from 'react'

const Breadcrumb = () => {
  return (
    <div className="flex flex-row gap-2 text-xs text-[#414141] py-2">
      <span className="underline">Home</span>
      <img src={ChevronRight} className="w-4" />
      <span>Tours</span>
      <img src={ChevronRight} className="w-4" />
      <span>Best of Italy</span>
    </div>
  )
}

export default Breadcrumb
