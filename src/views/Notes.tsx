import { View, Text } from "react-native"
import { NotesList } from "../components/notas"
import tw from 'twrnc'
export const Notes = () => {
  return (
    <View style={tw`bg-[#292D36] h-[100%] `}>
        <NotesList/>
    </View>
  )
}
