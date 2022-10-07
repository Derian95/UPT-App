
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../navigation/models/stackProps'

export const CardAssistance = () => {
    const navigation = useNavigation<propsStack>()
   return (
      <TouchableOpacity
         style={tw`bg-[#6093BF]  w-90 h-25 rounded-md items-start justify-between p-4 mb-4`}
         onPress={() => {
            navigation.navigate('Attendance')
         }}
      >
         <Text style={tw`text-white text-2xl `}>Asistencia</Text>
      </TouchableOpacity>
   )
}
