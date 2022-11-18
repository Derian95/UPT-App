import React, { FC, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { useGetSemesterByCodeMutation } from '../../store/api/upt-api'
import { setSemesters } from '../../store/state/semestersSlice'
import { changeModalShow, setSelectedCode } from '../../store/state'
import {
   View,
   Text,
   Button,
   StyleSheet,
   Modal as ModalView,
} from 'react-native'
import { RadioButton } from 'react-native-paper'
import tw from 'twrnc'
import { MotiView } from 'moti'

export const Modal = () => {
   const semesters = useAppSelector((state) => state.codes.selected)
   const codes = useAppSelector((state) => state.codes.codes)
   const modalVisible = useAppSelector((state) => state.codes.modalShow)

   const dispatch = useAppDispatch()
   const [getSemesters, { data, isSuccess }] = useGetSemesterByCodeMutation()

   useEffect(() => {
      if (isSuccess) {
         dispatch(setSemesters(data.data[0]))
      }
   }, [data])
   console.log(codes)
   return (
      
         <ModalView
            animationType='fade'
            transparent={true}
            visible={modalVisible}
         >
            <MotiView
             animate={{
              opacity:modalVisible?1:0
            }}
             transition={{type:'timing',duration:800, delay:300}}
               style={tw`w-full h-full bg-[#00000090] justify-center items-center`}
            >
               <MotiView
                animate={{
                  translateY:modalVisible?[400,0]:0,
                  scale:modalVisible?[0,1]:1
                }}
                 transition={{type:'timing',duration:500}}
                style={tw`bg-[#fff] rounded w-85 items-end pb-10 pr-5 pl-5 `}>
                  <Text
                     onPress={() => dispatch(changeModalShow())}
                     style={tw`text-black p-2 text-2xl pr-4`}
                  >
                     x
                  </Text>

                  {codes.map(({code,name}) => (
                     <View
                        style={tw`items-center  w-full justify-between flex-row  p-3 `}
                        key={code}
                     >
                        <Text style={tw`text-[#2C305A] w-[80%] capitalize`}>{name} <Text style={tw`text-[#2C305A]  font-semibold w-[80%]`}>( {code} )</Text></Text>

                        <RadioButton
                           value={code}
                           status={semesters == code ? 'checked' : 'unchecked'}
                           onPress={() => {
                              dispatch(setSelectedCode(code)),
                                 getSemesters({ codigoUniversitario: code }),
                                 dispatch(changeModalShow())
                           }}
                           color='#2C305A'
                        />
                     </View>
                  ))} 
               </MotiView>
            </MotiView>
         </ModalView>
      
   )
}
