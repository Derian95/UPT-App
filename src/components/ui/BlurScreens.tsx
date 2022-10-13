import { BackdropFilter, Blur, Canvas, Circle, Fill, vec } from "@shopify/react-native-skia"
import { Dimensions } from "react-native"

export const BlurScreens = () => {
    const { width, height}= Dimensions.get('screen')
    const c= vec(width / 2, (height/16) *1.1)
    const c2= vec(width / 4.35, (height/3.25) *1.1)
    const c3= vec(width /1.2, (height/1.8) *1.1)
    
    return (
      <Canvas style={{ position:'absolute', width:'100%', height:'100%'}}  >
        <Fill color={"#0a0a0a "} />
      <Circle c={c} r={30} color={'orange'}>
      </Circle>
      <Circle c={c2} r={40} color={'orange'}>
      </Circle>
      <Circle c={c3} r={60} color={'orange'}>
      </Circle>
      
      <BackdropFilter filter={<Blur blur={5}/>} >
        <Fill color={"#DFE3E610"}/>
      </BackdropFilter>
    </Canvas>
        
  )
}
