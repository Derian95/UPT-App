import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../navigation/models/stackProps'
export const CardTime = () => {
   const navigation = useNavigation<propsStack>()
   return (
      <TouchableOpacity
         style={tw`bg-[#BF4242]   w-85 h-25 rounded-md items-start justify-between p-4 mb-6 `}
         onPress={() => {
            navigation.navigate('Schedule')
         }}
      >
         <View style={tw`flex-row justify-between w-full h-full items-center`}>

            <Image
               style={tw`w-20 h-20`}
               source={require('../../../assets/horario2.png')}
            />
            <Text style={tw`text-white text-3xl font-medium  `}>HORARIO</Text>

         </View>
      </TouchableOpacity>
   )
}
