import { View, Text, FlatList } from 'react-native'
import { notesArray, Notes, Cources } from '../../data/notes'
import { NotesCard } from './NotesCard'
import tw from 'twrnc'
import { NotesBySemester  } from '../../interfaces' 
import { FC } from 'react'
import { BlurScreens } from '../ui/BlurScreens'


interface Props{
   notes: NotesBySemester
}


export const NotesList:FC<Props> = ({ notes }) => {
   const {cicloUbicacion, matriculaPagada, fecha, cursos} = notes
   //console.log(notes)
   return (
      <View style={tw`justify-center items-center mt-20`}>
        <View style={tw` w-100 p-5`}>
        <Text style={tw`text-white text-base ml-2`}>Ciclo de ubicacion : {cicloUbicacion}</Text>
         <Text style={tw`text-white text-base ml-2`}>Matricula Pagada: {matriculaPagada ? "Si": 'No'}</Text>
         <Text style={tw`text-white text-base ml-2`}>Fecha de matricula: {fecha.toString()}</Text>
        </View>

         <FlatList
         style={tw` w-11.8/12`}
            data={cursos}
            renderItem={(item) => <NotesCard cources={item.item} />}
            keyExtractor={(item) => item.codigoCurso}
            showsVerticalScrollIndicator={false}
         />
      </View>
   )
}
 