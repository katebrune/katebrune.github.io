import React, { FunctionComponent } from 'react'
import { CherryIcon } from '@/app/blog/[id]/(components)/fruit-salad-loader/cherry-icon'
import { LemonIcon } from '@/app/blog/[id]/(components)/fruit-salad-loader/lemon-icon'
import { BlueberryIcon } from '@/app/blog/[id]/(components)/fruit-salad-loader/blueberry-icon'

export interface FruitSaladLoaderProperties {}

export const FruitSaladLoader: FunctionComponent<
  FruitSaladLoaderProperties
> = () => {
  return (
    <div className="mt-60 flex h-auto items-center justify-center">
      <CherryIcon
        className="h-28 w-28 animate-bounce"
        data-testid="fruitsaladloader_icon-cherry"
      />
      <LemonIcon
        className="h-48 w-48 animate-bounce"
        data-testid="fruitsaladloader_icon-lemon"
      />
      <BlueberryIcon
        className="h-28 w-28 animate-bounce"
        data-testid="fruitsaladloader_icon-blueberry"
      />
    </div>
  )
}
