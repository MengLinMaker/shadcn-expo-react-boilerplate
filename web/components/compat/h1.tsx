import type { PropsWithChildren } from 'react'
import React from 'react'

interface Prop extends PropsWithChildren {
  className: string
}

export const H1 = ({ className, children }: Prop) => {
  return <h1 className={className}>{children}</h1>
}
