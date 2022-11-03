import { Canvas, CanvasProvider } from "@shopify/react-native-skia";
import { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import tw from "twrnc";
import { FormLogin, Header } from "../components/login";
import { BlurEffect } from "../components/ui/BlurEffect";
import { FormCard } from "../components/ui/FormCard";
import { Layout } from "../components/ui/layout/Layout";
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
    <Layout 
      header={<Header/>} 
      children2={<FormLogin/>}
    />

  );
};
