import Onboarding from 'react-native-onboarding-swiper';
import { pages2 } from '../utils/onboarding/data'
import {  Text } from "react-native";

export const OnBoarding = () => {
  return (
     <Onboarding
     skipLabel={<Text>Salir</Text>}
    nextLabel={<Text>Siguiente</Text>}
     bottomBarColor="#fff"
     bottomBarHeight={70}
     transitionAnimationDuration={1000}
     pages={pages2}
 />

    )
}
