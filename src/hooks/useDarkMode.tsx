import { useEffect } from 'react'
import { Button } from 'react-native'
import tw,{useDeviceContext, useAppColorScheme} from 'twrnc'

export const useDarkMode = () => {

    useDeviceContext(tw, {withDeviceColorScheme:false})
    const [colorSchema, toggleColorSchema, setColorSchema]= useAppColorScheme(tw)
    useEffect(() => {
    console.log(colorSchema)
    }, [])
  return (

    <Button
    title='raa'
    onPress={toggleColorSchema}
  />
    )
}
