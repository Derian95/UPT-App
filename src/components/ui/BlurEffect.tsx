import {Image, BackdropFilter, Blur, Canvas, Circle, Fill, Group, Paint, vec, useImage, BackdropBlur} from "@shopify/react-native-skia";
import React, { FC } from 'react';
import {Dimensions} from 'react-native'
interface Props{
    children:React.ReactNode
}
export const BlurEffect = () => {
    const { width, height}= Dimensions.get('window')
    const c= vec(width / 2.2, (height/3) *1.1)
    const r = c.x-100
    const image= useImage(require('../../../assets/horario.png'))
    return (
      <Canvas style={{ flex: 1, position:'absolute', width:'100%', height:'100%'}} >
        <Fill color={"#e5e8ef"} />
      <Circle c={c} r={200} color={'blue'}>
      </Circle>
      <BackdropFilter filter={<Blur blur={50}/>} >
        <Fill color={"#DFE3E610"}/>
      </BackdropFilter>
    </Canvas>
        
  )
}
