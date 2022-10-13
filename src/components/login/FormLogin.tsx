import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native"
import tw from 'twrnc'
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../navigation/models"
import { BlurEffect } from "../ui/BlurEffect"
export const FormLogin = () => {
  
   const navigation = useNavigation<propsStack>()

  return (
    <> 
      <BlurEffect/>
<ScrollView>
    <View  style={tw`  w-98 h-150 rounded-md items-center justify-start`}>
        <Text style={tw`text-4xl font-medium text-white  mt-12`}>Hola otra vez!!!</Text>
        <Text style={tw`text-lg text-white mb-8`}>Bienvenido :D</Text>
        <TextInput style={tw`bg-zinc-100  text-white w-10/12  rounded mb-4 text-[#383838] p-3`} placeholder={'Ingrese su codigo'}/>
       
        <TextInput style={tw`bg-zinc-100  text-white w-10/12 rounded mb-4 text-[#383838] p-3`} placeholder={'Contraseña'}/>
       
        <TouchableOpacity style={tw`mt-3 bg-blue-800 w-10/12 p-3 rounded justify-center items-center` 
         
      }
      onPress={()=>navigation.replace('Home')}
      >
            <Text style={tw`text-white text-lg`}>Ingresar</Text>

        </TouchableOpacity>
        <Text style={tw`text-xs text-white mt-5 mb-12 `}>¿Problemas para ingresar?</Text>

  </View>
  </ScrollView>
  </>
  )
}
