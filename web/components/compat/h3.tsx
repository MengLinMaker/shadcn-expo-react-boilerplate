import type { PropsWithChildren } from 'react'
import React from 'react'

interface Prop extends PropsWithChildren {
  className: string
}

export const H3 = ({ className, children }: Prop) => {
  return <h3 className={className}>{children}</h3>
}
