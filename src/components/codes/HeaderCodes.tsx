import React from 'react'
import {View, Text} from 'react-native'
import { IconButton, MD3Colors } from 'react-native-paper'
import tw from 'twrnc'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeModalShow } from "../../store/state";


export const HeaderCodes = () => {

    const semesters = useAppSelector((state) => state.semesters);
    const codes = useAppSelector((state) => state.codes.codes);
    const dispatch = useAppDispatch();
    
    if (semesters == null) return <Text>Cargandin***</Text>;
    const { codigoUniversitario, escuela, tipo, semestres, itemEstamento } =
      semesters;
      
  return (

    <>
     <View style={tw`absolute items-center`}>
          <Text style={tw` text-white text-2xl font-bold mb-4 text-center p-2`}>
            {escuela}
          </Text>
          <Text style={tw` text-slate-200 text-xl`}>{codigoUniversitario}</Text>
        </View>
       
        {codes.length > 1 ? (
           <><Text style={tw`absolute bottom-5 right-10 text-xs text-slate-300`}>
           Se detectaron mas codigos{" "}
         </Text>
          <IconButton
            style={tw`absolute bottom-0 right-0`}
            icon={"account-box"}
            onPress={() => dispatch(changeModalShow())}
            iconColor={MD3Colors.neutral80}
          />
          </>
        ) : null}</>
    )
}
