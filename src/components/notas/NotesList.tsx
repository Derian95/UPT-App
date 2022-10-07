import { View, Text, FlatList } from 'react-native'
import { notesArray, Notes, Cources } from '../../data/notes'
import { NotesCard } from './NotesCard'
import tw from 'twrnc'

export const NotesList = () => {
   return (
      <View style={tw`justify-center items-center mt-2`}>
         <FlatList
         style={tw` w-11.8/12`}
            data={notesArray.notes}
            renderItem={(item) => <NotesCard cources={item.item} />}
            keyExtractor={(item) => item.nombre_curso}
            showsVerticalScrollIndicator={false}
         />
      </View>
   )
}
