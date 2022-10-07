import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../navigation/models/stackProps'
export const CardTime = () => {
   const navigation = useNavigation<propsStack>()
   return (
      <TouchableOpacity
         style={tw`bg-[#D95560]  w-90 h-25 rounded-md items-start justify-between p-4 `}
         onPress={() => {
            navigation.navigate('Horario')
         }}
      >
         <Text style={tw`text-white text-2xl `}>Horario</Text>
      </TouchableOpacity>
   )
}
