import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyVariants = cva(
  'font-sans subpixel-antialiased dark:text-slate-200',
  {
    variants: {
      variant: {
        p: 'text-base font-normal',
        h1: 'text-5xl font-bold',
        h2: 'text-3xl font-semibold',
        h3: 'text-xl font-bold',
        code: '!bg-slate-900 font-mono text-base',
      },
    },
    defaultVariants: {
      variant: 'p',
    },
  },
)

export interface TypographyProperties
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {}

function Typography({
  className,
  variant,
  ...properties
}: TypographyProperties) {
  switch (variant) {
    case 'h1': {
      return (
        // eslint-disable-next-line jsx-a11y/heading-has-content
        <h1
          className={cn(typographyVariants({ variant }), className)}
          {...properties}
        />
      )
    }
    case 'h2': {
      return (
        // eslint-disable-next-line jsx-a11y/heading-has-content
        <h2
          className={cn(typographyVariants({ variant }), className)}
          {...properties}
        />
      )
    }
    case 'h3': {
      return (
        // eslint-disable-next-line jsx-a11y/heading-has-content
        <h3
          className={cn(typographyVariants({ variant }), className)}
          {...properties}
        />
      )
    }
    case 'code': {
      return (
        <code
          className={cn(typographyVariants({ variant }), className)}
          {...properties}
        />
      )
    }
    default: {
      return (
        <p
          className={cn(typographyVariants({ variant }), className)}
          {...properties}
        />
      )
    }
  }
}

export { Typography, typographyVariants }
