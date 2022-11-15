import React from 'react'
import {Image} from 'react-native'
export const Header = () => {
  return (
    <Image
    style={{
      width: 90,
      height: 90,
      resizeMode: "contain",
    }}
    source={require("../../../assets/logoupt.png")}
  />
  )
}
