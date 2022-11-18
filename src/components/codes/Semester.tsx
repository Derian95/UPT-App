import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeModalShow } from '../../store/state'
import { SemesterCard } from './SemesterCard'
import { IconButton, MD3Colors } from 'react-native-paper'
import { View, Text, ScrollView, Image, Button, FlatList } from 'react-native'

import tw from 'twrnc'

import { MotiText, useAnimationState, MotiImage, AnimatePresence } from 'moti'

export const Semester = () => {
   const semesters = useAppSelector((state) => state.semesters)
   const dispatch = useAppDispatch()
   const codes = useAppSelector((state) => state.codes.codes)

   //if (semesters == null) return <Text>Cargandin***</Text>
   const { codigoUniversitario, escuela, tipo, semestres, itemEstamento } =
      semesters

   const traslateIn = useAnimationState({
      from: {
         translateX: -10,
         opacity: 0,
      },
      to: {
         translateX: 0,
         opacity: 1,
      },
    
   })

   return (
      <>
      <MotiImage
            style={{
               position: 'absolute',
               resizeMode: 'contain',
               bottom: 0,
               height: '40%',
            }}
            source={require('../../../assets/codesImag.png')}
            from={{opacity:0}}
            animate={{opacity:1}}
            transition={{type:'timing', delay:1000, duration:1000}}
         />
        

         <MotiText
            state={traslateIn}
            transition={{ type: 'timing', duration: 1000 }}
            style={tw`text-[#2C305A]  mb-5 ml-2  w-10/11 text-sm font-semibold`}
         >
            Selecciona el semestre academico
         </MotiText>

         <FlatList
            data={semestres}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => (
               <SemesterCard semester={item.item} stament={itemEstamento} index={item.index} />
            )}
            keyExtractor={(item) => item.observacion}
            horizontal={true}
         />
      </>
   )
}
