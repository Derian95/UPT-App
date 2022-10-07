import { Button, View } from 'react-native';
import { CardHeader, CardTime, CardAssistance, CardNotes } from '../components/home';
import {useNavigation} from '@react-navigation/native'
import tw from 'twrnc'
import { propsStack } from '../navigation/models'

export const Home = () => {
  const navigate =useNavigation<propsStack>()
  return (
    <View style={tw`bg-[#292D36]  flex-1 justify-center items-center `}>
        <CardHeader/>
        <CardNotes/>
        <CardAssistance/>
        <CardTime/>
        
        <Button
        
        title='pa ver el login'
        onPress={()=>navigate.navigate('Login')}
        />
    </View>
  )
}
