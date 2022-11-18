import { FC, useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable, Image } from 'react-native'
import { DetailNotesCard } from './DetailNotesCard'
import tw from 'twrnc'
import { MotiView } from 'moti'
import { Grade } from '../../interfaces'

interface Props {
   cources: Grade
   index: number
}
export const NotesCard: FC<Props> = ({ cources, index }) => {
   const {
      asignatura,
      creditos,
      seccion,
      notaFinal,
      electivo,
      docente,
      unidades,
   } = cources

   const [show, setShow] = useState<boolean>()

   useEffect(() => {
      setShow(false)
   }, [])

   const pressButton = () => {
      setShow((prev) => !prev)
   }
   return (
      <MotiView
         from={{ translateY: 50 }}
         animate={{ translateY: 0 }}
         transition={{ type: 'timing', duration: 600, delay: index * 200 }}
         style={tw`bg-[#ffffff] h-auto w-full mt-5 justify-center items-center `}
      >
         <Pressable
            onPress={pressButton}
            style={tw` p-3  items-center flex-row  w-95 justify-between bg-zinc-100 shadow-xl  rounded h-20   `}
         >
            <Text
               style={tw` text-base ml-2 max-w-[70%] text-black ${
                  show ? 'font-black' : ''
               }`}
            >
               {asignatura}
            </Text>
            
            <MotiView
               animate={{
                  rotateZ: show ? '180deg' : '0deg',
               }}
            >
              
               <Image
                  style={{
                     width: 20,
                     height: 12,
                     resizeMode: 'stretch',
                  }}
                  source={require('../../../assets/arrow.png')}
               />
            </MotiView>
         </Pressable>
         <MotiView
            style={tw`${
               show ? 'h-auto' : 'h-0'
            } w-95 mt-0.5 shadow-xl bg-white`}
         >
            <View style={tw`mt-2`}>
               <Text style={tw`text-black text-base ml-2 font-semibold `}>
                  Docente :{' '}
                  <Text
                     style={tw`text-black text-base  font-light capitalize `}
                  >
                     {docente}
                  </Text>{' '}
               </Text>

               <View style={tw`flex-row  justify-between w-80`}>
                  <Text style={tw`text-black text-base ml-2 font-semibold`}>
                     Creditos del curso:{' '}
                     <Text style={tw`text-black text-base  font-light`}>
                        {creditos}
                     </Text>
                  </Text>
                  <Text style={tw`text-black text-base ml-2 font-semibold`}>
                     Seccion:{' '}
                     <Text style={tw`text-black text-base  font-light`}>
                        {seccion}
                     </Text>
                  </Text>
               </View>
            </View>
            <FlatList
               data={cources.unidades}
               renderItem={(item) => <DetailNotesCard units={item.item} />}
               keyExtractor={(item) => item.nombre}
               showsVerticalScrollIndicator={false}
            />
            <View style={tw`  w-full justify-center  items-center mt-8 mb-5`}>
               <Text style={tw`text-[#3F3F3F] font-bold text-3xl `}>
                  Su nota final es: {notaFinal}
               </Text>
            </View>
         </MotiView>
      </MotiView>
   )
}

{
   /* <View>
<Text style={tw`text-white text-base ml-2`}>Total de creditos: {creditos}</Text>
<Text style={tw`text-white text-base ml-2`}>Docente: {docente}</Text>
<Text style={tw`text-white text-base ml-2`}>Seccion: {seccion}</Text>
<Text style={tw`text-white text-base ml-2 mb-4`}>Curso Electivo: {electivo? "Si": "No"}</Text>
</View>
<FlatList
data={cources.unidades}
renderItem={(item) => <DetailNotesCard units={item.item}/>}
keyExtractor={(item) => item.nombre}
showsVerticalScrollIndicator={false}
/>
<Text style={tw`text-white text-2xl ml-2 mb-5`}>Su nota final es: {notaFinal}</Text> */
}

{
   /* <View style={tw`bg-[#ffffff]  ${acor ? 'h-20': 'h-auto'} w-full mt-5 justify-center items-center` }>
<View style={tw`mb-10 h-[100%] pr-2  items-center flex-row  w-90 justify-between bg-white shadow-xl  rounded${acor ? '': 'h-auto mb-2 mt-5 '}`}>
    <Text style={tw` text-base ml-2 max-w-[60%] ${acor ? 'text-black' :'text-orange-300'}`}>{asignatura}</Text>
   
    <IconButton
        icon={`${acor ? 'arrow-up-drop-circle': 'arrow-down-drop-circle' }`}
        iconColor={ MD3Colors.neutral80}
        size={20}
        onPress={()=>setAcor(!acor)}
    />
</View>



</View> */
}
