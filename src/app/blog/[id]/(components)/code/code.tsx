import React, { FunctionComponent } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

export const Code: FunctionComponent = ({ children }) => (
  <Highlight
    theme={themes.nightOwl}
    // @ts-ignore
    code={children?.trim()}
    language="tsx"
  >
    {({ style, tokens, getLineProps, getTokenProps }) => (
      <pre style={style} className="my-4 rounded-xl !bg-slate-900 p-4">
        {tokens.map((line, index) => (
          <div key={index} {...getLineProps({ line })}>
            {/* <span className="pr-4">{i + 1}</span> */}
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)
