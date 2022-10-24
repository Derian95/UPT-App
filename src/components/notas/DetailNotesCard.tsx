import { FC } from 'react'
import { View, Text } from 'react-native'
import { Units } from '../../interfaces'
import tw from 'twrnc'

interface Props {
   units: Units
}

export const DetailNotesCard: FC<Props> = ({ units }) => {

   const {criterios,nombre, peso }=units
   return (
      <View style={tw`bg-[#383838] ml-2 mr-2 p-2 mb-2`}>
         <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-[#67A64B] text-xl`}>
               {nombre}
            </Text>
            <Text style={tw`text-[#67A64B] text-xl`}>
               {peso} %
            </Text>
         </View>

         <View style={tw`flex-row justify-between mt-3 p-2 bg-[#0a0a0a]`}>
            <Text style={tw` w-4/12 text-white`}>Descripcion</Text>
            <Text style={tw` text-white`}>Peso</Text>
            <Text style={tw` text-white`}>Nota</Text>
         </View>
         {criterios.map(({nombre, peso, promedio}) => (
            <View key={nombre}>
               <View style={tw`flex-row justify-between mb-2  p-2`}>
                  <Text style={tw`text-gray-400 w-4/12`}>
                     {nombre}
                  </Text>
                  <Text style={tw`text-gray-400`}>{peso}%</Text>
                  <Text style={tw`text-gray-400 ${promedio <=10.5 ?'text-red-400': 'text-blue-400'}`}>{promedio}</Text>
               </View>
               <View style={tw`w-12/12 h-1 bg-gray-800 `}></View>
            </View>
         ))}
      </View>
   )
}
