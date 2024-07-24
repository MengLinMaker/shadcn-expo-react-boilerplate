import { View } from 'react-native'
import { ProfileCard } from '~/shared/components/ProfileCard'

export default function Screen() {
  return (
    <View className="h-screen flex align-middle">
      <View className="m-auto w-96">
        <ProfileCard />
      </View>
    </View>
  )
}
