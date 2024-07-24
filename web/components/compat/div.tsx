import type { PropsWithChildren } from 'react'

interface Prop extends PropsWithChildren {
  className?: string
}

export const Div = ({ className, children }: Prop) => {
  return <div className={className}>{children}</div>
}
