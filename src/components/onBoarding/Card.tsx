import { FC } from 'react'
import {View, Text} from 'react-native'
import tw from 'twrnc'


interface Props{
    title:string
    title2:string
    description:string
}
export const Card:FC<Props> = ({title, title2, description}) => {
  return (
    <View style={tw`w-5/6`}>
        <Text style={tw`text-base text-[#E0AE35]`}>{title}</Text>
        <Text style={tw`text-2xl text-[#2C305A] font-bold`}>{title2}</Text>
        <Text style={tw`text-sm text-[#8E8E8E]`}>{description}</Text>
    </View>
  )
}
