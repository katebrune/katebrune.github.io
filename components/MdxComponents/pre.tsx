import { FunctionComponent } from 'react'

export const MdxPre: FunctionComponent = (props: any) => {
  return (
    <pre
      style={{
        borderRadius: '8px',
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20,
      }}
      {...props}
    />
  )
}
