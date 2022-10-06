import { View, Text } from "react-native"
import tw from 'twrnc'

export const CardTime = () => {
  return (
    <View style={tw`bg-[#D95560]  w-90 h-25 rounded-md items-start justify-between p-4 `}>
        <Text style={tw`text-white text-2xl `}>Horario</Text>

        <Text style={tw`text-white text-4xl font-bold`}>2017059489</Text>
</View>
  )
}
