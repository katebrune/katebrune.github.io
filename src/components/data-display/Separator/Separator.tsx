import * as RadixSeparator from '@radix-ui/react-separator'
import { FunctionComponent } from 'react'

export interface SeparatorProps extends RadixSeparator.SeparatorProps {}

export const Separator: FunctionComponent<SeparatorProps> = ({ ...props }) => {
  return (
    <RadixSeparator.Root
      {...props}
      className="bg-red-400 font-red-400 w-full h-1"
    />
  )
}
