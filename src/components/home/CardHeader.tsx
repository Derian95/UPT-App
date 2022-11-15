import { View, Text,Image } from 'react-native';
import tw from 'twrnc'

export const CardHeader = () => {
  return (
    <View  style={tw` w-90 h-35 mt-15  items-center justify-between flex-row p-4 mb-4`}>
        <View>
            <Text style={tw`text-white text-2xl `}>Herrera Amezquita</Text>
            <Text style={tw`text-zinc-500 text-lg font-light `}>Derian Francisco</Text>

        <Text style={tw`text-white text-4xl font-bold`}>2017059489</Text>
        </View>
        <Image
        
               style={[tw`w-20 h-30`,{resizeMode:'contain'}]}
               source={require('../../../assets/userMaleIcon.png')}
            />
    </View>
  )
}
