import { ChevronDown, CNegativeIcon, CPlusIcon } from 'assets'
import AccordionFAQ from 'components/elements/AccordionFAQ'
import React, { useState } from 'react'

const FAQSection = () => {
  const faqData = [
    {
      question: 'What is your return policy?',
      answer: 'You have 30 days to return your purchase for a full refund.'
    },
    {
      question: 'How do I track my order?',
      answer:
        'You can track your order through the tracking link sent to your email.'
    },
    {
      question: 'Can I change my shipping address?',
      answer:
        'Yes, please contact customer support within 24 hours to update your address.'
    }
  ]

  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    faqData.map(() => false)
  )

  const allExpanded = expandedItems.every((item) => item)

  const toggleAll = (expand: boolean) => {
    setExpandedItems(faqData.map(() => expand))
  }

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    )
  }

  return (
    <div className="flex flex-col">
      <div className="font-bold text-[22px] pb-2">
        Frequently asked questions
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
        {faqData.map((item, index) => (
          <AccordionFAQ
            key={index}
            question={item.question}
            answer={item.answer}
            isExpanded={expandedItems[index]}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default FAQSection
