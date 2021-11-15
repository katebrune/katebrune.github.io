import { FunctionComponent } from 'react'
import { BlueberryIcon, CherryIcon, LemonIcon } from '../icons'

export interface FruitSaladLoaderProps {}

export const FruitSaladLoader: FunctionComponent<FruitSaladLoaderProps> =
  ({}) => {
    return (
      <div className="flex justify-center items-center h-auto mt-60">
        <CherryIcon className="w-28 h-28 animate-bounce" />
        <LemonIcon className="w-48 h-48 animate-bounce" />
        <BlueberryIcon className="w-24 h-24 animate-bounce" />
      </div>
    )
  }
