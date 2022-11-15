import { View, Text, FlatList } from 'react-native'
import { notesArray, Notes, Cources } from '../../data/notes'
import { NotesCard } from './NotesCard'
import tw from 'twrnc'
import { NotesBySemester } from '../../interfaces'
import { FC, useEffect, useState } from 'react'

interface Props {
   notes: NotesBySemester
}

export const NotesList: FC<Props> = ({ notes }) => {
   const {fecha, cursos } = notes
   const [fecha_inicio, setFecha_inicio] = useState<string>()

   const convertDate = (fecha: Date) => {
      var x = new Date(fecha)
      var dd = x.getDate()
      var mm = x.toLocaleString('default', { month: 'short' }).toUpperCase()
      setFecha_inicio(`${dd} de ${mm}`)
   }

   useEffect(() => {
      convertDate(fecha)
   }, [])

   //console.log(notes)
   return (
        
         <FlatList
            style={tw` w-full `}
            data={cursos}
            renderItem={(item) => <NotesCard cources={item.item} index={item.index} />}
            keyExtractor={(item) => item.codigoCurso}
            showsVerticalScrollIndicator={false}
         />
   )
}
