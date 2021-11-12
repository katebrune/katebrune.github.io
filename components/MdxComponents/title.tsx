import { FunctionComponent } from 'react'

export interface TitleProps {}

export const MdxTitle: FunctionComponent = (props: any) => {
  return <h1 className="text-4xl text-red-400 font-semibold my-8" {...props} />
}
