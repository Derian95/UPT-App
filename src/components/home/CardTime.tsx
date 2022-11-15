import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../navigation/models/stackProps'

import { MotiView, useAnimationState } from 'moti'

export const CardTime = () => {
   const navigation = useNavigation<propsStack>()

   const cardIn=useAnimationState({
      from:{
         translateX:-100,
         opacity:0
      },
      to:{
         translateX:0,
         opacity:1
      }
   })

   return (
      <MotiView 
      state={cardIn}
      transition={{type:'spring', delay:300}}
      style={tw`w-90 h-30 m-2 rounded-3xl bg-white shadow-2xl `}
      >
         <TouchableOpacity
            style={tw`p-4 rounded-3xl  h-[100%]  rounded-md items-start justify-between mb-6 `}
            onPress={() => {
               navigation.navigate('Schedule')
            }}
         >
            <View
               style={tw`flex-row justify-between w-full h-full items-center`}
            >
               <View>
                  <Text style={tw`text-black text-3xl font-medium`}>
                     HORARIO
                  </Text>
                  <Text style={tw`text-[#8B8B8B] text-sm  `}>
                     Observa tu horario academico
                  </Text>
               </View>

               <Image
                  style={[{ resizeMode: 'contain' }, tw`w-18 h-18`]}
                  source={require('../../../assets/asistenceImg.png')}
               />
            </View>
         </TouchableOpacity>
      </MotiView>
   )
}
