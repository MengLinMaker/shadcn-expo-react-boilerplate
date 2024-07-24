import type { PropsWithChildren } from 'react'
import React from 'react'

interface Prop extends PropsWithChildren {
  href: string
}

export const A = ({ href, children }: Prop) => {
  return <a href={href}>{children}</a>
}
