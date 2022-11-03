import React, { useEffect, useState } from 'react'
import {View} from 'react-native'

import {
    Canvas,
    ImageSVG,
    useSVG
  } from "@shopify/react-native-skia";
   
export const FormCard = () => {

        const svg = useSVG(require("../../../assets/svg/union.svg"));
    
    
  return(
    <Canvas style={{ flex: 1,width:'50%', height:'50%' }}>
    { svg && (
      <ImageSVG
        svg={svg}
        x={0}
        y={0}
        width={0}
        height={25}
      />)
    }
  </Canvas>
  )
}

  