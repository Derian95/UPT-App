import { FC } from 'react'
import {View, Text, Image} from 'react-native'
import tw from 'twrnc'


interface Props{
    ciclo:string
    matricula:boolean
    fecha:string
}
export const HeaderNotes:FC<Props> = ({ciclo, matricula, fecha}) => {
  return (
    <View>
        
        <View style={tw` w-100 p-5`}>
            <Text style={tw`text-white text-base ml-2`}>
               Ciclo de ubicacion : {ciclo}
            </Text>
            <Text style={tw`text-white text-base ml-2`}>
               Matricula Pagada: {matricula ? 'Si' : 'No'}
            </Text>
            <Text style={tw`text-white text-base ml-2`}>
               Fecha de matricula: {fecha}
            </Text>
         </View>
{/* 
         <Image
        
        style={[tw`w-50 h-50 top-0 bg-red-500`,{resizeMode:'contain'}]}
        source={require('../../../assets/noteHeader.png')}
     /> */}
    </View>
  )
}
