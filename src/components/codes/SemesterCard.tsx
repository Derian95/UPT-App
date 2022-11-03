

import { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Semestre} from '../../interfaces'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

import { propsStack } from '../../navigation/models/stackProps'
import { GradientBack } from '../ui'

  interface Props {
  semester:Semestre
  stament:number
  }

  interface Nuevo{
    a:string
    b:number
  }
   //const nuevo:Nuevo

   type ra={
    a:string
    b:number
   }
const nuevo:Nuevo={
  a:'der',
  b:21231
}

const nombre:string=""

   console.log(nuevo)

export const SemesterCard:FC<Props> = ({ semester, stament }) => {
    const navigation = useNavigation<propsStack>()
    
  return (
    <View style={tw`w-50 h-50 m-2 rounded-3xl    bg-white shadow-2xl `}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Home',{idSemester:semester.idSemestre, idStament:stament})}
        style={tw`p-4 rounded-3xl  h-[100%] p-4  `}
        >
            <Text style={tw`text-black text-base  font-semibold`}>{semester.observacion}</Text>
            <Text style={tw`text-[#6F6F6F] text-2xl  absolute bottom-5 right-5 font-bold`}>{semester.semestre}</Text>
        </TouchableOpacity>
    </View>
  )
}
