import { View, Text, ActivityIndicator } from "react-native";
import { NotesList } from "../components/notas";
import tw from "twrnc";
import { useRoute } from "@react-navigation/native";
import { routeProps } from "../navigation/models";
import { useGetNotesSemesterMutation } from "../store/api/upt-api";
import { useEffect } from "react";
import { BlurScreens } from "../components/ui/BlurScreens";

export const Notes = () => {
  const route = useRoute<routeProps>();
  const { idSemester, idStament } = route.params;
  const [notesCources, { data, isLoading, isSuccess, isError }] =
    useGetNotesSemesterMutation();

  useEffect(() => {
    notesCources({
      codigoUniversitario: 2017059489,
      idSemestre: idSemester,
      itemEstamento: idStament,
    });
  }, []);

  if (isLoading)
    return (
      <View style={tw`w-full h-full justify-center items-center bg-[#0a0a0a]`}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <View
      style={tw`bg-[#0a0a0a]  flex-1 justify-center items-center  w-full h-full`}
    >
      <BlurScreens />

      {isSuccess ? (
        data.data != null ? (
          <NotesList notes={data.data[0]} />
        ) : (
          <Text style={tw`text-white`}>{data.mensajeError[0].mensaje}</Text>
        )
      ) : null}
    </View>
  );
};
