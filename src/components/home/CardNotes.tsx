import { View, Text, TouchableOpacity, Button } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

import { propsStack } from '../../navigation/models/stackProps'

export const CardNotes = () => {
   const navigation = useNavigation<propsStack>()
   return (
      <TouchableOpacity
         style={tw`bg-[#67A64B]  w-90 h-25 rounded-md items-start justify-between p-4 mb-4 `}
         onPress={() => {
            navigation.navigate('Notes')
         }}
      >
         <Text style={tw`text-white text-2xl `}>Notas</Text>
      </TouchableOpacity>
   )
}
