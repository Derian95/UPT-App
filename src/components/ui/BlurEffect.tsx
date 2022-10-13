import {Image, BackdropFilter, Blur, Canvas, Circle, Fill, Group, Paint, vec, useImage, BackdropBlur} from "@shopify/react-native-skia";
import React, { FC } from 'react';
import {Dimensions} from 'react-native'
interface Props{
    children:React.ReactNode
}
export const BlurEffect = () => {
    const { width, height}= Dimensions.get('screen')
    const c= vec(width / 2.9, (height/3.5) *1.1)
    const c2= vec(width / 1.35, (height/1.25) *1.1)
    
    return (
      <Canvas style={{ position:'absolute', width:width, height:height}} >
        <Fill color={"#0a0a0a "} />
      <Circle c={c} r={100} color={'#020070'}>
      </Circle>
      <Circle c={c2} r={50} color={'#9B9846'}>
      </Circle>
      
      <BackdropFilter filter={<Blur blur={20}/>} >
        <Fill color={"#DFE3E610"}/>
      </BackdropFilter>
    </Canvas>
        
  )
}
