import { FC, useState } from "react"
import { View, Text, FlatList, Button } from 'react-native';
import { DetailNotesCard } from './DetailNotesCard'
import { Notes, Cources, Unidad } from '../../data/notes'
import tw from 'twrnc'

interface Props{
    cources:Cources
}
export const NotesCard:FC<Props> = ({ cources }) => {

    const [acor, setAcor] = useState(true)

  return (
    <View style={tw`bg-[#2E2E2E] mb-2  rounded overflow-hidden  ${acor ? 'h-20': 'h-auto'}`}>
        <View style={tw`mb-10 h-[100%] pr-2  items-center flex-row justify-between ${acor ? '': 'h-[10] mb-2 mt-5'}`}>
            <Text style={tw`text-white text-3xl ml-2`}>{cources.nombre_curso}</Text>
            <Button
            onPress={()=>setAcor(!acor)}
            title={`${acor?'Detalles':'Cerrar'}`}
            />
        </View>
        
        <FlatList
         data={cources.unidades}
         renderItem={(item) => <DetailNotesCard unidades={item.item}  />}
         keyExtractor={(item) => item.nombre}
         showsVerticalScrollIndicator={false}
        />

        {/*
            cources.unidades.map(eva=>(
                <Text>{eva.nombre}</Text>
            ))*/
        }

    </View>
  )
}
