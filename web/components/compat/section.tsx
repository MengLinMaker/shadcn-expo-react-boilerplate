import type { PropsWithChildren } from 'react'
import React from 'react'

interface Prop extends PropsWithChildren {
  className: string
}

export const Section = ({ className, children }: Prop) => {
  return <section className={className}>{children}</section>
}
