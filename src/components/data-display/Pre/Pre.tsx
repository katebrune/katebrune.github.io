import React, { FunctionComponent, HTMLAttributes } from 'react'
import cx from 'classnames'

export interface PreProps extends HTMLAttributes<HTMLPreElement> {}

export const Pre: FunctionComponent<PreProps> = ({ ...props }) => (
  <pre
    {...props}
    className={cx(
      'rounded-lg',
      'm-auto',
      'mt-8',
      'mb-8',
      'p-4',
      'bg-backgroundSlate',
    )}
  />
)
