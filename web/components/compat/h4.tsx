import type { PropsWithChildren } from 'react'
import React from 'react'

interface Prop extends PropsWithChildren {
  className: string
}

export const H4 = ({ className, children }: Prop) => {
  return <h4 className={className}>{children}</h4>
}
