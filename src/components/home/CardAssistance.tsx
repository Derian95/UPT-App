import { View, Text } from "react-native"
import tw from 'twrnc'

export const CardAssistance = () => {
  return (
    <View style={tw`bg-[#6093BF]  w-90 h-25 rounded-md items-start justify-between p-4 mb-4`}>
        <Text style={tw`text-white text-2xl `}>Asistencia</Text>

        <Text style={tw`text-white text-4xl font-bold`}>2017059489</Text>
</View>
  )
}
