import { View} from 'react-native'
import {
    Canvas,
    Rect,
    LinearGradient,
    Skia,
    Shader,
    vec
  } from "@shopify/react-native-skia";

export const GradientBack = () => {
  return (
    <Canvas style={{ flex: 1, position:'absolute', width:'100%', height:'100%' }}>
      <Rect x={0} y={0} width={500} height={256}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(300, 500)}
          colors={["#082ee7", "black"]} 
         /* colors={["#fbb040", "#f9ed32"]}*/
        />
      </Rect>
    </Canvas>
  )
}
