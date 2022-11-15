import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLoginUserMutation } from "../../store/api/upt-api-auth";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  GestureResponderEvent
} from "react-native";
import { Formik } from "formik";
import tw from "twrnc";

import { propsStack } from "../../navigation/models";
import { validationSchemaLogin } from "../../utils";
import LottieView from 'lottie-react-native';

export const FormLogin = () => {
  const navigation = useNavigation<propsStack>();
  const [pass, setPass] = useState(true);
  const [loginUser, { data, isSuccess, isLoading }] = useLoginUserMutation();
  const animation = useRef<LottieView>(null);
  

  if(isLoading){
    console.log(isLoading)
  }
  useEffect(() => {
    if(isSuccess){
      console.log(data)
  
      data.data==null? alert("Datos erroneos"):navigation.replace('Codes')
    }
  
  }, [data])
  
  return (
    
          <Formik
            initialValues={{
              idSistema: 0,
              idTipoUsuario: 2,
              usuario: "",
              contrasenia: "",
            }}
            validationSchema={validationSchemaLogin}
            onSubmit={(values) => loginUser({...values}).unwrap()}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
              <View style={tw`w-9/12 mb-8`}>
                <Text style={tw`text-2xl text-black font-bold `}>Bienvenido otra vez!!</Text>
                <Text style={tw`text-xs text-[#8B8B8B]`}>Inicie sesion para poder continuar</Text>
              </View>
             
                <View
                  style={tw`flex-row bg-white rounded-3xl w-10/12 shadow-2xl justify-between items-center ${
                    errors.usuario ? "border border-red-500 border-2" : ""
                  }`}
                >
                   <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: "stretch",
                      marginLeft: 15,
                    }}
                    source={require("../../../assets/newUser.png")}
                  />
                  <TextInput
                    keyboardType="numeric"
                    maxLength={10}
                    style={tw`text-gray-500 text-sm  flex-1 p-3`}
                    placeholder={"Ingrese su codigo :D"}
                    onChangeText={handleChange("usuario")}
                    onBlur={handleBlur("usuario")}
                    value={values.usuario}
                  />

                 
                </View>
                <Text style={tw`text-red-500  text-xs w-9/12 mb-3 mt-1 `}>
                  {errors.usuario}
                </Text>

                <View
                  style={tw`flex-row bg-white rounded-3xl w-10/12 shadow-2xl  justify-between items-center ${
                    errors.contrasenia ? "border border-red-500 border-2" : ""
                  }`}
                >
                    <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: "stretch",
                      marginLeft: 15,
                    }}
                    source={require("../../../assets/lock2.png")}
                  />
                  <TextInput
                    keyboardType="numeric"
                    secureTextEntry={pass ? true : false}
                    maxLength={6}
                    style={tw`text-gray-500 text-sm flex-1  p-3`}
                    placeholder={"Contraseña"}
                    onChangeText={handleChange("contrasenia")}
                    onBlur={handleBlur("contrasenia")}
                    value={values.contrasenia}
                  />

                  <View onTouchEnd={() => setPass((prev) => !prev)}>
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: "stretch",
                        marginRight: 10,
                      }}
                      source={
                        pass
                          ? require("../../../assets/eyed.png")
                          : require("../../../assets/uneyed.png")
                      }
                    />
                  </View>
                </View>
                <Text style={tw`text-red-500  text-xs w-9/12 mb-4 mt-1 `}>
                  {errors.contrasenia}
                </Text>

                <TouchableOpacity
                  style={tw`mt-1 ${isLoading ? 'bg-[#8B8B8B]':'bg-[#2C305A]'} w-10/12 h-15 rounded-3xl  flex-row justify-center items-center`}
                  onPress={handleSubmit as (values: any) => void }
                >
                  <Text style={tw`text-white text-lg  `}>Ingresar</Text>
                  {
                    isLoading?
                  <LottieView
                    autoPlay
                    ref={animation}
                    style={tw` w-[60%] h-[100%] absolute right-0`}
                    source={require('../../lottie/buttonLoader.json')}
                  />
                  :
                  null
                  }
                </TouchableOpacity>

              
              </>
            )}
          </Formik>

          
  );
};
