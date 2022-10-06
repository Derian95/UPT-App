import { View, Text } from 'react-native'
import tw from 'twrnc'
import { FormLogin } from '../components/login'

export const Login = () => {
   return (
      <View style={tw`bg-[#292D36]  flex-1 justify-center items-center `}>
         <Text style={tw` mb-10 text-white text-6xl`}>UPT</Text>
         <FormLogin />
      </View>
   )
}
