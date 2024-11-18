import React from 'react'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'

interface PortableProps {
  data: PortableTextBlock[] | any
}

const PortableTextReact: React.FC<PortableProps> = ({ data }) => {
  return (
    <div>
      <PortableText
        value={data}
        components={{
          marks: {
            link: ({ value, children }) => {
              const { href } = value
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-dotted border-b border-b-[#e02044] hover:border-double"
                  // style={{ textDecoration: 'underline' }}
                >
                  {children}
                </a>
              )
            }
          }
        }}
      />
    </div>
  )
}

export default PortableTextReact
