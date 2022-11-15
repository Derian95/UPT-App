import { View, Text, Animated, Button, Image } from "react-native";
import LottieView from 'lottie-react-native';
import tw from "twrnc";
import { useRef } from "react";

export const Loader = () => {
  const animation = useRef<LottieView>(null);
  const dark=true
  return (
<View style={tw`h-full h-full justify-center items-center bg-white z-50 ${dark?'bg-[#2C305A]':'bg-white' }`}>
      <View style={tw` justify-center items-center  h-[55]`}>
        <Image
          style={{
            width: 90,
            height: 90,
            resizeMode: "contain",
            position: 'absolute',
            top: 0
          }}
          source={dark?require("../../../assets/logoupt.png"):require("../../../assets/logo2.png")}
        />
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
          }}
          source={dark?require('../../lottie/loaderWhite.json'):require('../../lottie/loader.json')}
        />

      </View>

    </View>

    )
}
