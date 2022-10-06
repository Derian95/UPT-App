import { View } from 'react-native';
import { CardHeader, CardTime, CardAssistance, CardNotes } from '../components/home';
import tw from 'twrnc'
export const Home = () => {
  return (
    <View style={tw`bg-[#292D36]  flex-1 justify-center items-center `}>
        <CardHeader/>
        <CardNotes/>
        <CardAssistance/>
        <CardTime/>
        
        
    </View>
  )
}
