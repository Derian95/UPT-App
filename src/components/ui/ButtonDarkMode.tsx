import { useEffect } from 'react';
import { TouchableOpacity, View, Text } from "react-native"
import tw,{useAppColorScheme,useDeviceContext} from 'twrnc'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setDark } from '../../store/state/uiSlice';


export const ButtonDarkMode = () => {
  useDeviceContext(tw, { withDeviceColorScheme: false });

  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
  //console.log(toggleColorScheme)
  const dispatch = useAppDispatch()
  const tra = useAppSelector(state=>state.ui.dark)

  useEffect(() => {

  setColorScheme('light')
    
  }, [])
  
  console.log('colorScheme')
  console.log(tra)
  const setTheme=() => {
    toggleColorScheme()
    dispatch(setDark(colorScheme as string))
  }
  return (
    <View>
              {/* <TouchableOpacity onPress={toggleColorScheme}> */}

              <TouchableOpacity onPress={setTheme}>
                  <Text style={tw`text-black dark:text-white dark:bg-red-500`}>Switch Color Scheme</Text>
                </TouchableOpacity>

                <Text style={tw`text-black dark:bg-black bg-white`}>Switch Color Scheme</Text>

    </View>
  )
}
