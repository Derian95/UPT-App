import { useEffect, useState } from "react";
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

export const FormLogin = () => {
  const navigation = useNavigation<propsStack>();
  const [pass, setPass] = useState(true);
  const [loginUser, { data, isSuccess, isLoading }] = useLoginUserMutation();

  

  if(isLoading){
    console.log(isLoading)
  }
  useEffect(() => {
    if(isSuccess){
      console.log(data)
  
      data.data==null? alert("SE WEBIO MANO"):navigation.replace('Codes')
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
                <View
                  style={tw`flex-row bg-zinc-100 w-10/12 rounded   justify-between items-center ${
                    errors.usuario ? "border border-red-500 border-2" : ""
                  }`}
                >
                  <TextInput
                    keyboardType="numeric"
                    maxLength={10}
                    style={tw`text-gray-500 text-base  flex-1 ml-2 p-3`}
                    placeholder={"Ingrese su codigo :D"}
                    onChangeText={handleChange("usuario")}
                    onBlur={handleBlur("usuario")}
                    value={values.usuario}
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
                </View>
                <Text style={tw`text-red-500  text-xs w-10/12 mb-4 `}>
                  {errors.usuario}
                </Text>

                <View
                  style={tw`flex-row bg-zinc-100 w-10/12 rounded  justify-between items-center ${
                    errors.contrasenia ? "border border-red-500 border-2" : ""
                  }`}
                >
                  <TextInput
                    keyboardType="numeric"
                    secureTextEntry={pass ? true : false}
                    maxLength={6}
                    style={tw`text-gray-500 text-base flex-1 ml-2 p-3`}
                    placeholder={"Contraseña"}
                    onChangeText={handleChange("contrasenia")}
                    onBlur={handleBlur("contrasenia")}
                    value={values.contrasenia}
                  />

                  <View onTouchEnd={() => setPass((prev) => !prev)}>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: "stretch",
                        marginRight: 10,
                      }}
                      source={
                        pass
                          ? require("../../../assets/show.png")
                          : require("../../../assets/unshow.png")
                      }
                    />
                  </View>
                </View>
                <Text style={tw`text-red-500  text-xs w-10/12 mb-4 `}>
                  {errors.contrasenia}
                </Text>

                <TouchableOpacity
                  style={tw`mt-3 bg-blue-800 w-10/12 p-3 rounded justify-center items-center`}
                  onPress={handleSubmit as (values: any) => void }
                >
                  <Text style={tw`text-white text-lg`}>Ingresar</Text>
                </TouchableOpacity>

              
              </>
            )}
          </Formik>

          
  );
};
