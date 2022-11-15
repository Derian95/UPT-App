import React, { FC } from "react"
import { View, Text } from 'react-native'
import tw from  'twrnc'

interface Props {
     header:React.ReactNode
     children2:React.ReactNode
     alto?:string
}

export const Layout:FC<Props> = ({header, children2, alto}) => {
  return (
<View style={tw` flex-1 justify-center items-center  bg-pink-800 `}>
        <View style={tw` flex-col bg-orange-200  h-full`}>
         
          <View style={tw`bg-white ${alto? alto:'h-3/9'}`}>
            <View style={tw`h-full w-100 bg-[#2C305A]  rounded-bl-[15] justify-center  items-center`}>
            {header}
            </View>
        </View>

          <View style={tw`bg-[#2C305A] ${alto? alto:'h-6/9'}`}>
            <View style={tw`h-full w-100 bg-white rounded-tr-[15] justify-start pt-10 items-center`}>
              {/* <View style={tw`h-50 w-50 bg-white ml-2 mt-12 shadow-2xl rounded-full`}></View> */}
              {children2}
            </View>
          </View>

        </View>
    </View>

    )
}
