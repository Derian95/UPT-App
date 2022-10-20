import { View, Text, TouchableOpacity, Button,Image } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

import { propsStack } from '../../navigation/models/stackProps'
import { FC } from 'react'


interface Props{
   idSemester:number
   idStament:number
}

export const CardNotes:FC<Props> = ({idSemester, idStament}) => {
   
   const navigation = useNavigation<propsStack>()

   return (
      <TouchableOpacity
         style={tw`bg-[#42BF56]  w-85 h-25 rounded-md items-start justify-between p-4 mb-6 `}
         onPress={() => {
            navigation.navigate('Notes',{
               idSemester:idSemester,
               idStament:idStament
            })
         }}
      >
         <View style={tw`flex-row justify-between w-full h-full items-center`}>
            <Text style={tw`text-white text-3xl font-medium  `}>NOTAS</Text>

            <Image
                style={[tw`w-18 h-25`,{resizeMode:'stretch'}]}
               source={require('../../../assets/notas2.png')}
            />
         </View>
      </TouchableOpacity>
   )
}
