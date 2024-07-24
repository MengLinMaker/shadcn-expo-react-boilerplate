import type { PropsWithChildren } from 'react'
import { Linking, Text } from 'react-native'

interface Prop extends PropsWithChildren {
  href: string
  className: string
}

export const A = ({ className, href, children }: Prop) => {
  return (
    <Text className={className} onPress={() => Linking.openURL(href)}>
      {children}
    </Text>
  )
}
