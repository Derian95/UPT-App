

import { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Semestre} from '../../interfaces'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

import { propsStack } from '../../navigation/models/stackProps'

interface Props {
semester:Semestre
stament:number
}



export const SemesterCard:FC<Props> = ({ semester, stament }) => {
    const navigation = useNavigation<propsStack>()
    // console.log('semester')
    // console.log(semester)
     console.log(stament)

  return (
    <View style={tw`w-90 m-2 bg-blue-500 p-2`}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Home',{idSemester:semester.idSemestre, idStament:stament})}
        >
            <Text>{semester.observacion}</Text>
            <Text>{semester.semestre}</Text>
        </TouchableOpacity>
    </View>
  )
}
