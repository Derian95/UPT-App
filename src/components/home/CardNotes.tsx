import { View, Text, TouchableOpacity, Button,Image } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

import { propsStack } from '../../navigation/models/stackProps'
import { FC } from 'react'
import { MotiView, useAnimationState } from 'moti'


interface Props{
   idSemester:number
   idStament:number
}

export const CardNotes:FC<Props> = ({idSemester, idStament}) => {
   
   const navigation = useNavigation<propsStack>()

   const cardIn=useAnimationState({
      from:{
         translateX:-100,
         opacity:0
      },
      to:{
         translateX:0,
         opacity:1
      }
   })
   
   return (
      <MotiView 
      state={cardIn}
      transition={{type:'spring', delay:600}}
      style={tw`w-90 h-30 m-2 rounded-3xl bg-white shadow-2xl `}>
      <TouchableOpacity
         style={tw`p-4 rounded-3xl  h-[100%]  rounded-md items-start justify-between mb-6 `}
         onPress={() => {
            navigation.navigate('Notes',{
               idSemester:idSemester,
               idStament:idStament
            })
         }}
      >
         <View style={tw`flex-row justify-between w-full h-full items-center`}>
            <View>
            <Text style={tw`text-black text-3xl font-medium`}>NOTAS</Text>
            <Text style={tw`text-[#8B8B8B] text-sm  `}>Consulta la calificacion de tus cursos</Text>
            </View>
           
            <Image
                style={[{resizeMode:'contain'},tw`w-18 h-18`]}
               source={require('../../../assets/notasImg.png')}
            />
         </View>
      </TouchableOpacity>
      </MotiView>
   )
}
