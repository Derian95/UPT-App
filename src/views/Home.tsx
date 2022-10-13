import { Button, View } from 'react-native';
import { CardHeader, CardTime, CardAssistance, CardNotes } from '../components/home';
import {useNavigation} from '@react-navigation/native'
import tw from 'twrnc'
import { propsStack } from '../navigation/models'
import { BlurEffect } from '../components/ui/BlurEffect';
import { BlurScreens } from '../components/ui/BlurScreens';

export const Home = () => {
  const navigate =useNavigation<propsStack>()
  return (
    <View style={tw`bg-[#0a0a0a]  flex-1 justify-start items-center pt-5 `}>
        <CardHeader/>
        <View style={tw`items-center w-full  h-full pt-10 rounded-t-3xl overflow-hidden`}>
          <BlurScreens/>
          <CardAssistance/>
          <CardTime/>

          <CardNotes/>
        
        </View>
        
       {/* <Button
        
        title='pa ver el login'
        onPress={()=>navigate.replace('Login')}
  />*/}
    </View>
  )
}
