import React from 'react'
import { View, Text } from 'react-native'
import { IconButton, MD3Colors } from 'react-native-paper'
import tw from 'twrnc'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeModalShow } from '../../store/state'
import { MotiText, useAnimationState } from 'moti'
import { Modal } from './Modal'
export const HeaderCodes = () => {
   const semesters = useAppSelector((state) => state.semesters)
   const codes = useAppSelector((state) => state.codes.codes)
   const dispatch = useAppDispatch()
   const { codigoUniversitario, escuela, tipo, semestres, itemEstamento } =
      semesters

  // if (semesters == null) return <Text>Cargandin***</Text>

   const fadeInt = useAnimationState({
      from: {
         translateY: 10,
         opacity: 0,
      },
      to: {
         translateY: 0,
         opacity: 1,
      },
   })

   return (
      <>
         <View style={tw`absolute items-center`}>
            <MotiText
               state={fadeInt}
               transition={{ type: 'timing', duration: 1500, delay: 600 }}
               style={tw` text-white text-xl font-bold mb-4 text-center p-2 capitalize`}
            >
               {escuela}
            </MotiText>
            <MotiText
               state={fadeInt}
               transition={{ type: 'timing', duration: 1500, delay:300 }}
               style={tw` text-slate-200 text-xl`}
            >
               {codigoUniversitario}
            </MotiText>
         </View>

         {codes.length > 1 ? (
            <>
               <MotiText
                 state={fadeInt}
                 transition={{ type: 'timing', duration: 1500 }}
                  style={tw`absolute bottom-5 right-10 text-xs text-slate-300`}
               >
                  Se detectaron mas codigos{' '}
               </MotiText>
               <IconButton
                  style={tw`absolute bottom-0 right-0`}
                  icon={'account-box'}
                  onPress={() => dispatch(changeModalShow())}
                  iconColor={MD3Colors.neutral80}
               />
            </>
         ) : null}
         <Modal/>
      </>
   )
}
