import { useEffect, useRef } from "react";
import { View, Text, Animated, Button, Image } from "react-native";
import tw from "twrnc";
import { FormLogin, Header } from "../components/login";
import LottieView from 'lottie-react-native';

export const Login = () => {

  

  return (
      <View style={tw`bg-[#2C305A] w-full h-full justify-center items-center`}>
        <Text style={tw`text-white text-xs mt-15 absolute bottom-16`}>¿Tiene problemas para iniciar sesion?</Text>

        <Header />
        <View style={tw`bg-white w-85  justify-start items-center rounded-[10] mt-10 pt-10 pb-10`}>
          <FormLogin />
        </View>
      </View>

  );


};
