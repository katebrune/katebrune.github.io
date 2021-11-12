import { FunctionComponent } from 'react'
import path from 'path'
import Image from 'next/image'

export interface MdxImageProps {
  src: string
  alt?: string
  className?: string
  width?: number
  height?: number
}

export const MdxImage: FunctionComponent<MdxImageProps> = ({
  src,
  alt,
  className,
  width = 375,
  height = 150,
}) => {
  return (
    <Image
      src={src}
      alt={alt ?? ''}
      className={className ?? ''}
      width={width}
      height={height}
      quality={100}
    />
  )
}
