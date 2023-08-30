import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * https://ui.shadcn.com/docs/components/card
 */

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn(
      'rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_3px_10px_#0f172a]',
      className,
    )}
    {...properties}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...properties}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3
    ref={reference}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className,
    )}
    {...properties}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <p
    ref={reference}
    className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
    {...properties}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <div ref={reference} className={cn('p-6 pt-0', className)} {...properties} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn('flex items-center p-6 pt-0', className)}
    {...properties}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
