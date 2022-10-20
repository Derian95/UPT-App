import { FC, useState } from "react"
import { View, Text, FlatList, Button } from 'react-native';
import { DetailNotesCard } from './DetailNotesCard'
import { IconButton, MD3Colors } from 'react-native-paper';
import tw from 'twrnc'
import { Grade } from "../../interfaces";

interface Props{
    cources:Grade
}
export const NotesCard:FC<Props> = ({ cources }) => {
    const {asignatura, creditos, seccion, notaFinal, electivo, docente, unidades} = cources
    const [acor, setAcor] = useState(true)
    //console.log(cources)
  return (
    <View style={tw`bg-[#2E2E2E] mb-2  rounded overflow-hidden  ${acor ? 'h-20': 'h-auto'} w-95` }>
        <View style={tw`mb-10 h-[100%] pr-2  items-center flex-row justify-between ${acor ? '': 'h-auto mb-2 mt-5'}`}>
            <Text style={tw` text-base ml-2 max-w-[60%] ${acor ? 'text-white' :'text-orange-300'}`}>{asignatura}</Text>
           
            <IconButton
                icon={`${acor ? 'arrow-up-drop-circle': 'arrow-down-drop-circle' }`}
                iconColor={ MD3Colors.neutral80}
                size={20}
                onPress={()=>setAcor(!acor)}
            />
        </View>
        <View>
            <Text style={tw`text-white text-base ml-2`}>Total de creditos: {creditos}</Text>
            <Text style={tw`text-white text-base ml-2`}>Docente:{docente}</Text>
            <Text style={tw`text-white text-base ml-2`}>Seccion: {seccion}</Text>
            <Text style={tw`text-white text-base ml-2 mb-4`}>Curso Electivo:{electivo? "Si": "No"}</Text>
        </View>
        <FlatList
         data={cources.unidades}
         renderItem={(item) => <DetailNotesCard units={item.item}/>}
         keyExtractor={(item) => item.nombre}
         showsVerticalScrollIndicator={false}
        />
        <Text style={tw`text-white text-2xl ml-2 mb-5`}>Su nota final es: {notaFinal}</Text>
       

    </View>
  )
}
