import { Button, View, Text } from 'react-native';
import { CardHeader, CardTime, CardAssistance, CardNotes } from '../components/home';
import {useNavigation , useRoute} from '@react-navigation/native'
import tw from 'twrnc'
import { propsStack, routeProps} from '../navigation/models'
import { BlurEffect } from '../components/ui/BlurEffect';
import { BlurScreens } from '../components/ui/BlurScreens';


export const Home = () => {
  const navigate =useNavigation<propsStack>()
  const route = useRoute<routeProps>()

  const {idSemester, idStament} =route.params

  return (
    <View style={tw`bg-[#0a0a0a]  flex-1 justify-start items-center pt-5 `}>
        <CardHeader/>
       
        <View style={tw`items-center w-full  h-full pt-10 rounded-t-3xl overflow-hidden`}>
          <BlurScreens/>
          <CardAssistance/>
          <CardTime/>

          <CardNotes idSemester={idSemester} idStament={idStament}/>
        
        </View>
        
       {/* <Button
        
        title='pa ver el login'
        onPress={()=>navigate.replace('Login')}
  />*/}
    </View>
  )
}
