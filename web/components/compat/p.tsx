import type { PropsWithChildren } from 'react'

interface Prop extends PropsWithChildren {
  className?: string
}

export const P = ({ className, children }: Prop) => {
  return <p className={className}>{children}</p>
}
