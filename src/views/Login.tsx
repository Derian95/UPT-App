import { Canvas, CanvasProvider } from '@shopify/react-native-skia'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import { FormLogin } from '../components/login'
import { BlurEffect } from "../components/ui/BlurEffect"

export const Login = () => {
   return (
      <View style={tw`bg-white  flex-1 justify-center items-center `}>
        <FormLogin />
       
        
      </View>
   )
}
