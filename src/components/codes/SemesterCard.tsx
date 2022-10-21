

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



export const SemesterCard:FC<Props> = ({ semester, stament }) => {
    const navigation = useNavigation<propsStack>()
    

  return (
    <View style={tw`w-90  m-2  bg-[#6093BF] rounded overflow-hidden`}>
      <GradientBack/>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Home',{idSemester:semester.idSemestre, idStament:stament})}
        style={tw`p-4 rounded`}
        >
            <Text style={tw`text-white text-base `}>{semester.observacion}</Text>
            <Text style={tw`text-white text-sm`}>{semester.semestre}</Text>
        </TouchableOpacity>
    </View>
  )
}
