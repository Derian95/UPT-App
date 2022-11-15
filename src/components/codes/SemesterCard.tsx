

import { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Semestre} from '../../interfaces'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

import { propsStack } from '../../navigation/models/stackProps'

import { MotiView, useAnimationState } from 'moti'


  interface Props {
  semester:Semestre
  stament:number
  index:number
  }


export const SemesterCard:FC<Props> = ({ semester, stament, index }) => {
    const navigation = useNavigation<propsStack>()

    const springIn=useAnimationState({
      from:{
        translateY:30, opacity:0
      },
      to:{
        translateY:0, opacity:1
      }
    })
    
  return (
    <MotiView
    state={springIn}
    transition={{type:'timing',duration:800,delay:index*300}}
    style={tw`w-50 h-50 m-2 rounded-3xl bg-white shadow-2xl `}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Home',{idSemester:semester.idSemestre, idStament:stament})}
        style={tw`p-4 rounded-3xl  h-[100%] p-4  `}
        >
            <Text style={tw`text-black text-base  font-semibold`}>{semester.observacion}</Text>
            <Text style={tw`text-[#6F6F6F] text-2xl  absolute bottom-5 right-5 font-bold`}>{semester.semestre}</Text>
        </TouchableOpacity>
    </MotiView>
  )
}
