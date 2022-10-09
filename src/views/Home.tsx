import { Button, View } from 'react-native';
import { CardHeader, CardTime, CardAssistance, CardNotes } from '../components/home';
import {useNavigation} from '@react-navigation/native'
import tw from 'twrnc'
import { propsStack } from '../navigation/models'

export const Home = () => {
  const navigate =useNavigation<propsStack>()
  return (
    <View style={tw`bg-[#292D36]  flex-1 justify-start items-center pt-5 `}>
        <CardHeader/>
        <CardNotes/>
        <CardAssistance/>
        <CardTime/>
        
        <Button
        
        title='pa ver el login'
        onPress={()=>navigate.replace('Login')}
        />
    </View>
  )
}
