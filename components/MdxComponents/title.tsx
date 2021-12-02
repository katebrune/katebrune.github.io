import { FunctionComponent } from 'react'

export interface TitleProps {}

export const MdxTitle: FunctionComponent = (props: any) => {
  return (
    <h1
      className="text-4xl text-pink-500 font-semibold my-4 lg:my-8"
      {...props}
    />
  )
}
