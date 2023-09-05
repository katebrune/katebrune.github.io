import React, { FunctionComponent } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { Mermaid } from 'mdx-mermaid/lib/Mermaid'
import { ScrollArea } from '@/components/ui/scroll-area/scroll-area'

// @ts-ignore
export const Code: FunctionComponent = ({ children, className }) => {
  if (className === 'language-mermaid') {
    return (
      <pre className="my-4 rounded-xl bg-slate-900 p-4">
        <ScrollArea>
          {/* @ts-ignore */}
          <Mermaid chart={children.trim()} />
        </ScrollArea>
      </pre>
    )
  }
  return (
    <Highlight
      theme={themes.nightOwl}
      // @ts-ignore
      code={children?.trim()}
      language="tsx"
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="my-4 rounded-xl !bg-slate-900 p-4">
          <ScrollArea>
            {tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line })}>
                {/* <span className="pr-4">{i + 1}</span> */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </ScrollArea>
        </pre>
      )}
    </Highlight>
  )
}
