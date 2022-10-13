import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../navigation/models/stackProps'

export const CardAssistance = () => {
   const navigation = useNavigation<propsStack>()
   return (
      <TouchableOpacity
         style={tw`bg-[#6093BF]   w-85 h-25 rounded-md items-start justify-between p-4 mb-6`}
         onPress={() => {
            navigation.navigate('Attendance')
         }}
      >
         <View style={tw`flex-row justify-between w-full h-full items-center`}>
            <Text style={tw`text-white text-3xl font-medium `}>ASISTENCIA</Text>

            <Image
               style={tw`w-20 h-20`}
               source={require('../../../assets/asistencia2.png')}
            />
         </View>
      </TouchableOpacity>
   )
}
