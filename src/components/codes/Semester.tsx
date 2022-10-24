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
      <View style={tw`justify-center items-center h-2/6`}>
        <Image
          source={{
            uri: "https://diariosinfronteras.com.pe/wp-content/uploads/2021/09/5-A-18.jpg",
          }}
          style={{ height: '100%', width: "100%", opacity: 0.4 }}
          blurRadius={3}
        />
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
        ) : null}
      </View>

      <View style={tw`bg-black h-4/6`}>
        <Image
        style={tw`w-80 h-80 absolute bottom-0 left-0`}
        source={
          require('../../../assets/imageCodes01.png')
        }

        />

      <Image
        style={tw`w-30 h-30 absolute bottom-92 left-70`}
        source={
          require('../../../assets/imageCodes02.png')
        }
        />
         <Image
        style={tw`w-35 h-35 absolute bottom-45 left-40`}
        source={
          require('../../../assets/imageCodes02.png')
        }
        />

        
        <Text style={tw`text-white mt-10 mb-10 ml-2`}>
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
       
        
      </View>
    </>
  );
};
