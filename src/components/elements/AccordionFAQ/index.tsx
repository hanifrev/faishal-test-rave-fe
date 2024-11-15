import React from 'react'
import { CNegativeIcon, CPlusIcon } from 'assets'

interface AccordionProps {
  question: string
  answer: string
  isExpanded: boolean
  onToggle: () => void
}

const AccordionFAQ: React.FC<AccordionProps> = ({
  question,
  answer,
  isExpanded,
  onToggle
}) => {
  return (
    <div>
      <div
        className={`border border-[#e6e6e6] p-[12.5px] lg:py-5 lg:px-[25px] transition-all ${
          isExpanded
            ? 'bg-[#2d5a7b] border-l border-r border-t-[#2d5a7b] border-l-[#2d5a7b] border-r-[#2d5a7b] text-white border-b-0'
            : ''
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg cursor-pointer" onClick={onToggle}>
            {question}
          </div>
          <button onClick={onToggle} className="text-blue-500">
            {isExpanded ? (
              <img className="w-9" src={CNegativeIcon} alt="Collapse" />
            ) : (
              <img className="w-9" src={CPlusIcon} alt="Expand" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <p className="p-[10px] lg:px-5 border border-t-0 border-[#2d5a7b] transition-all">
          {answer}
        </p>
      )}
    </div>
  )
}

export default AccordionFAQ