import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import {View, Text, Image} from 'react-native'
import tw from 'twrnc'
import { propsStack } from '../../navigation/models'
import 'moment/locale/es';

interface Props{
    ciclo:string
    matricula:boolean
    fecha:Date
}
export const HeaderNotes:FC<Props> = ({ciclo, matricula, fecha}) => {
    const navigate = useNavigation<propsStack>()
    const [dateFormat, setDateFormat] = useState<string>()

    const formatDate=(date:Date) => {
            const raa=moment(date).format('LL')
            setDateFormat(raa)

    }
    console.log(dateFormat)
    const changeHEader = () => {
        navigate.setOptions({
           headerShown: true,
        })
     }

     useEffect(() => {
        changeHEader()
        formatDate(fecha)
    }, [])
     
     
  return (
    <View>
        
        <View style={tw` w-100 p-5`}>
            <Text style={tw`text-white text-3xl ml-2 font-bold`}>
             {ciclo} ciclo
            </Text>
            <Text style={tw`text-white text-base ml-2`}>
                {matricula ? 'Matricula Cancelada' : 'Adeudo de matricula'}
            </Text>
            <Text style={tw`text-white text-sm ml-2`}>
               Matricula realizada el {dateFormat}
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
