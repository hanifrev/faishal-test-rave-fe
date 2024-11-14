import { ChevronDown } from 'assets'
import React from 'react'

const TopBar = () => {
  return (
    <div className="hidden lg:flex flex-row justify-between items-center z-[9999] relative">
      <div className="flex items-center gap-1 opacity-75 text-xs">
        <span>TTC family of brands</span>
        <span className="w-3">
          <img src={ChevronDown} />
        </span>
      </div>
      <div className="py-2 text-xs font-bold flex flex-row gap-4">
        <span className="cursor-pointer underline-transition">
          <a href="#">FAQs</a>
        </span>
        <span className="cursor-pointer underline-transition">
          <a href="#">Get a Quote</a>
        </span>
        <span className="cursor-pointer underline-transition">
          <a href="#">Agents Login</a>
        </span>
        <span className="cursor-pointer flex flex-row gap-1 underline-transition">
          <a href="#">My Trafalgar</a>
          <img src={ChevronDown} className="w-2" />
        </span>
      </div>
    </div>
  )
}

export default TopBar
