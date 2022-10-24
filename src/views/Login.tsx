import { Canvas, CanvasProvider } from "@shopify/react-native-skia";
import { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import tw from "twrnc";
import { FormLogin } from "../components/login";
import { BlurEffect } from "../components/ui/BlurEffect";

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
    <View style={tw`bg-white  flex-1 justify-center items-center `}>
      <>
        <BlurEffect />
        <Animated.ScrollView style={{ opacity: fadeAnim }}>
          <View
            style={tw`  w-98 h-150 rounded-md items-center justify-start pt-40`}
          >
            <Text style={tw`text-4xl font-medium text-white  mb-5 mt-10`}>
              Hola otra vez!!!
            </Text>
            <FormLogin />

            <Text style={tw`text-xs text-white mt-5 mb-12 `}>
              ¿Problemas para ingresar?
            </Text>
          </View>
        </Animated.ScrollView>
      </>
    </View>
  );
};
