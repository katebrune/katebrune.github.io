import { FunctionComponent } from 'react'
export interface MdxImageProps {
  src: string
  alt?: string
  className?: string
}

export const MdxImage: FunctionComponent<MdxImageProps> = ({
  src,
  alt,
  className,
}) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className ?? ''} />
}
