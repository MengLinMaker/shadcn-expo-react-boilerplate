import type { PropsWithChildren } from 'react'
import React from 'react'

interface Prop extends PropsWithChildren {
  className: string
}

export const H2 = ({ className, children }: Prop) => {
  return <h2 className={className}>{children}</h2>
}
