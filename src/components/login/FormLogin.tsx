import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated
} from "react-native";
import { BlurEffect } from "../ui/BlurEffect";
import tw from "twrnc";
import { propsStack } from "../../navigation/models";

export const FormLogin = () => {
  const navigation = useNavigation<propsStack>();
  const [pass, setPass] = useState(true)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
  Animated.timing(fadeAnim,{
    toValue: 1,
    useNativeDriver: false,
    duration:1000
  }).start()
  };
  


  useEffect(() => {
  fadeIn()
  }, [])
  
  return (
    <>
      <BlurEffect />
      <Animated.ScrollView style={{opacity:fadeAnim}}>
        <View style={tw`  w-98 h-150 rounded-md items-center justify-start pt-40`}>
          <Text style={tw`text-4xl font-medium text-white  mt-12`}>
            Hola otra vez!!!
          </Text>
          <Text style={tw`text-lg text-white mb-8`}>Bienvenido :D</Text>

          <Animated.View style={ tw`flex-row bg-zinc-100 w-10/12 rounded  mb-4  justify-between items-center`}>
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              style={tw`text-gray-500 text-base  flex-1 ml-2 p-3`}
              placeholder={"Ingrese su codigo :D"}
            />

                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "stretch",
                    marginRight: 10,
                  }}
                  source={require("../../../assets/user.png")}
                  
                />
          </Animated.View>

          <View style={tw`flex-row bg-zinc-100 w-10/12 rounded  mb-4  justify-between items-center`}>
          
              <TextInput
                keyboardType="numeric"
                secureTextEntry={pass?true:false}
                maxLength={6}
                style={tw`text-gray-500 text-base flex-1 ml-2 p-3`}
                placeholder={"Contraseña"}
              />

              <View  onTouchEnd={()=>setPass(prev=> !prev)}>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: "stretch",
                      marginRight: 10,
                    }}
                    source={ pass? require("../../../assets/show.png"): require("../../../assets/unshow.png")}
                    
                  />
              </View>
          </View>


          <TouchableOpacity
            style={tw`mt-3 bg-blue-800 w-10/12 p-3 rounded justify-center items-center`}
            onPress={() => navigation.replace("Codes")}
          >
            <Text style={tw`text-white text-lg`}>Ingresar</Text>
          </TouchableOpacity>

          <Text style={tw`text-xs text-white mt-5 mb-12 `}>
            ¿Problemas para ingresar?
          </Text>
        </View>
      </Animated.ScrollView>
    </>
  );
};
