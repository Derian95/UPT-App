import { View, Text, TextInput, TouchableOpacity } from "react-native"
import tw from 'twrnc'
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../navigation/models"
export const FormLogin = () => {
  
   const navigation = useNavigation<propsStack>()

  return (
    <View style={tw`bg-[#383838]  w-90 h-120 rounded-md items-center justify-start`}>
        <Text style={tw`text-3xl text-white mb-12 mt-12`}>INICIO DE SESION</Text>
       
        <Text style={tw` text-white text-left w-10/12`}>Codigo</Text>
        <TextInput style={tw`bg-zinc-100  text-white w-10/12 h-10 rounded mb-4 text-[#383838] p-2`} value={'text'}/>
       
        <Text style={tw` text-white  text-left w-10/12`}>Contraseña</Text>
        <TextInput style={tw`bg-zinc-100  text-white w-10/12 h-10 rounded mb-4 text-[#383838] p-2`} value={'DSDSDSDSDS'}/>
       
        <TouchableOpacity style={tw`mt-3 bg-[#0487FF] w-10/12 h-10 rounded justify-center items-center` 
         
      }
      onPress={()=>navigation.replace('Home')}
      >
            <Text style={tw`text-white text-lg`}>Ingresar</Text>

        </TouchableOpacity>
  </View>
  )
}
