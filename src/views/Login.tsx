import { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import tw from "twrnc";
import { FormLogin, Header } from "../components/login";

export const Login = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: false,
      duration: 1000,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

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
