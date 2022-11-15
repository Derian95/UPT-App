import { FC } from 'react'
import { View, Text } from 'react-native'
import { Units } from '../../interfaces'
import tw from 'twrnc'

interface Props {
   units: Units
}

export const DetailNotesCard: FC<Props> = ({ units }) => {

   const {criterios,nombre, peso,promedio }=units
   return (
      <View style={tw` bg-white ml-1 mr-1 mt-5 border p-1`}>
         <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-[#2C305A] text-xl font-medium w-8/10`}>
               {nombre}
            </Text>
            <Text style={tw`text-[#2C305A] text-xl font-medium w-2/10 text-right`}>
               {peso} %
            </Text>
         </View>

         <View style={tw`flex-row justify-between mt-3 p-2 bg-[#DCD9D9] `}>
            <Text style={tw` w-4/12 text-black w-7/12 font-semibold`}>Descripcion</Text>
            <Text style={tw` text-black w-3/12 font-semibold`}>Peso</Text>
            <Text style={tw` text-black w-2/12 font-semibold`}>Nota</Text>
         </View>
         
         {criterios.map(({nombre, peso, promedio}) => (
            <View key={nombre}>
               <View style={tw`flex-row justify-between mb-2 `}>
                  <Text style={tw`text-[#3F3F3F] w-7/12 p-1 capitalize`}>
                     {nombre}
                  </Text>
                  <Text style={tw`text-[#3F3F3F]  w-3/12 p-1`}>{peso}%</Text>
                  <Text style={tw`text-gray-400   w-2/12 p-1 ${promedio <=10.5 ?'text-red-400': 'text-blue-400'}`}>{promedio}</Text>
               </View>
               <View style={tw`w-12/12 h-.3 bg-[#DCD9D9] `}></View>
            </View>
         ))}
         <View style={tw`flex-row mt-2 mr-2 justify-end `}>
         <Text style={tw`text-[#3F3F3F] font-semibold text-xl `}>Promedio de la unidad : </Text>
         <Text style={tw`text-[#3F3F3F] font-semibold text-xl `}>{promedio}</Text>

         </View>
      </View>
   )
}
