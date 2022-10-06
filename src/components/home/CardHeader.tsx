import { View, Text } from 'react-native';
import tw from 'twrnc'

export const CardHeader = () => {
  return (
    <View style={tw`bg-[#383838]  w-90 h-43 rounded-md items-start justify-between p-4 mb-4`}>
        <View>
            <Text style={tw`text-white text-2xl `}>Herrera Amezquita</Text>
            <Text style={tw`text-zinc-500 text-lg font-light `}>Derian Francisco</Text>
        </View>

        <Text style={tw`text-white text-4xl font-bold`}>2017059489</Text>
    </View>
  )
}
