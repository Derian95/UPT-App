import { FC } from 'react'
import { View, Text } from 'react-native'
import { Unidad } from '../../data/notes'
import tw from 'twrnc'
interface Props {
   unidades: Unidad
}

export const DetailNotesCard: FC<Props> = ({ unidades }) => {
   return (
      <View style={tw`bg-[#383838] ml-2 mr-2 p-2 mb-2`}>
         <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-[#67A64B] text-2xl`}>
               Unidad {unidades.nombre}
            </Text>
            <Text style={tw`text-[#67A64B] text-2xl`}>
               {unidades.peso_unidad}
            </Text>
         </View>

         <View style={tw`flex-row justify-between mt-3 p-2 bg-gray-800`}>
            <Text style={tw` w-4/12`}>Descripcion</Text>
            <Text>Peso</Text>
            <Text>Nota</Text>
         </View>
         {unidades.data.map((eva) => (
            <View key={eva.criterio}>
               <View style={tw`flex-row justify-between mb-2  p-2`}>
                  <Text style={tw`text-gray-400 w-4/12`}>
                     {eva.descripcion}
                  </Text>
                  <Text style={tw`text-gray-400`}>{eva.peso_criterio}</Text>
                  <Text style={tw`text-gray-400`}>{eva.nota}</Text>
               </View>
               <View style={tw`w-12/12 h-1 bg-gray-800 `}></View>
            </View>
         ))}
      </View>
   )
}
