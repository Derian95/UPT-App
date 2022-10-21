import { View, Text, ScrollView, Image, Button } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { SemesterCard } from "./SemesterCard";
import tw from 'twrnc'
import React from "react";
import { BlurScreens } from "../ui/BlurScreens";
import { changeModalShow } from "../../store/state";
import { IconButton, MD3Colors } from 'react-native-paper';

export const Semester = () => {
  const semesters = useAppSelector((state) => state.semesters);
  const dispatch = useAppDispatch();
  const codes = useAppSelector((state) => state.codes.codes);

  if (semesters == null) return <Text>Cargandin***</Text>;
  const { codigoUniversitario, escuela, tipo, semestres, itemEstamento } = semesters;

  return (
    <>
    <View style={tw`justify-center items-center`}>
    <Image
        source={{uri:'https://diariosinfronteras.com.pe/wp-content/uploads/2021/09/5-A-18.jpg'}}
        style={{height:200, width:'100%', opacity:.4}}
      />
      <View style={tw`absolute items-center`}>
        <Text style={tw` text-white text-2xl font-bold mb-4`}>{codigoUniversitario}</Text>
        <Text style={tw`text-slate-300 text-base`}>{escuela}</Text>
        
      </View>
      <Text style={tw`absolute bottom-5 right-10 text-white text-xs text-slate-400`}>Se detectaron mas codigos </Text>
      {
          codes.length>1?
          <IconButton 
          style={tw`absolute bottom-0 right-0`}
        icon={"account-box"}  
        onPress={() => dispatch(changeModalShow())}  
        iconColor={ MD3Colors.neutral80}
        />:
        null}
    </View>

     
    <ScrollView >
      <BlurScreens/>

        

      <View style={tw`h-full w-full justify-start items-center pt-4`}>
      {semestres.map((sem) => (
          <SemesterCard
            semester={sem}
            key={sem.observacion}
            stament={itemEstamento}
          />
        ))}
    </View>
      
    </ScrollView>
    </>

  );
};
