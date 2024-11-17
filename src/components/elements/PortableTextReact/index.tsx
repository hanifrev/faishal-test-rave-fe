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
          types: {
            block: ({ value }) => {
              if (value.style === 'normal') {
                return (
                  <p>
                    {value.children.map((child: any) => child.text).join(' ')}
                  </p>
                )
              }
              return (
                <div>
                  {value.children.map((child: any) => child.text).join(' ')}
                </div>
              )
            }
          },
          marks: {
            link: ({ value, children }) => {
              const { href } = value
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                  style={{ textDecoration: 'underline' }}
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
