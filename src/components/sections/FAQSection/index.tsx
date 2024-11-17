import { ChevronDown, CNegativeIcon, CPlusIcon } from 'assets'
import AccordionFAQ from 'components/elements/AccordionFAQ'
import { useGetFAQQuery } from 'lib/services/api'
import React, { useEffect, useState } from 'react'

const FAQSection = () => {
  const { data, isLoading, isError } = useGetFAQQuery()
  console.log(data?.faqList)

  const faqData = data?.faqList ?? []

  console.log(faqData.map((x) => x.answer))

  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    faqData.map(() => false)
  )

  useEffect(() => {
    if (faqData.length > 0) {
      setExpandedItems(faqData.map(() => false))
    }
  }, [faqData])

  // this must be false on initial load, if it's true it will be error on accordion
  const allExpanded = expandedItems.every((item) => item)

  const toggleAll = (expand: boolean) => {
    setExpandedItems(faqData.map(() => expand))
  }

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    )
  }

  console.log(toggleAll, '===')
  console.log(allExpanded, 'EXPAND ALL')

  return (
    <div className="flex flex-col">
      <div className="font-bold text-[22px] pb-2">
        {isLoading
          ? 'Loading...'
          : data?.mainTitle || 'No title availabe, check CMS'}
      </div>
      <div className="py-[15px] text-right text-base font-bold flex justify-end">
        <button
          onClick={() => toggleAll(!allExpanded)}
          className="flex flex-row gap-2 items-center"
        >
          {allExpanded ? 'Collapse All' : 'Expand All'}
          <img
            src={ChevronDown}
            alt="Chevron"
            className={`transition-transform w-4 ${
              allExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
      <div className="py-4 flex flex-col gap-1">
        {data?.faqList.map((item, index) => (
          <AccordionFAQ
            key={index}
            question={item.question}
            answer={item.answer}
            isExpanded={expandedItems[index]}
            onToggle={() => toggleItem(index)}
          />
        ))}
        {isError && <span>Error fetching data</span>}
      </div>
    </div>
  )
}

export default FAQSection
