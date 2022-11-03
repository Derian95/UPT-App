import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeModalShow } from "../../store/state";
import { BlurScreens } from "../ui/BlurScreens";
import { SemesterCard } from "./SemesterCard";
import { IconButton, MD3Colors } from "react-native-paper";
import { View, Text, ScrollView, Image, Button, FlatList } from "react-native";
import tw from "twrnc";

export const Semester = () => {
  const semesters = useAppSelector((state) => state.semesters);
  const dispatch = useAppDispatch();
  const codes = useAppSelector((state) => state.codes.codes);

  if (semesters == null) return <Text>Cargandin***</Text>;
  const { codigoUniversitario, escuela, tipo, semestres, itemEstamento } =
    semesters;

  return (
    <>
      <Image
        style={{position:'absolute', resizeMode:'contain', bottom:0, height:'40%'}}
        
        source={require("../../../assets/codesimg.png")}
      />

      <Text style={tw`text-[#2C305A]  mb-5 ml-2  w-10/11 text-base`}>
        Selecciona el semestre academico
      </Text>

      <FlatList
        data={semestres}
        renderItem={(item) => (
          <SemesterCard semester={item.item} stament={itemEstamento} />
        )}
        keyExtractor={(item) => item.observacion}
        horizontal={true}
      />
    </>
  );
};
