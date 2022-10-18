import React, { FC } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { RadioButton } from "react-native-paper";
import { changeModalShow, setSelectedCode } from "../../store/state";

import { useGetSemesterByCodeMutation } from "../../store/api/upt-api";
import { setSemesters } from "../../store/state/semestersSlice";
import tw from "twrnc";

export const Modal = () => {
  const semesters = useAppSelector((state) => state.codes.selected);
  const codes = useAppSelector((state) => state.codes.codes);
  const tes = useAppSelector((state) => state.codes.modalShow);

  const semestersData = useAppSelector((state) => state.semesters);
  const dispatch = useAppDispatch();
  const [getSemesters, { data, isLoading, isSuccess }] =
    useGetSemesterByCodeMutation();

  if (isSuccess) {
    console.log(data.data[0]);
    dispatch(setSemesters(data.data[0]));
  }

  console.log(tes);
  return (
    <View style={tes ? styles.show : styles.unshow}>
      <View
        style={tw`bg-red-500 rounded w-70 items-end pb-6 `}
      >
        <Text
          onPress={() => dispatch(changeModalShow())}
          style={tw`text-slate-100 p-2 text-2xl pr-4`}
        >
          x
        </Text>

        {codes.map((cod) => (
          // <Text  accessibilityValue={} key={cod}>{cod}</Text>
          <View
            style={tw`items-center  w-full justify-center flex-row  p-1`}
            key={cod}
          >
            <Text style={tw`text-slate-100`}>{cod}</Text>

            <RadioButton
              value={cod}
              // status={ checked === 'second' ? 'checked' : 'unchecked' }
              status={semesters == cod ? "checked" : "unchecked"}
              onPress={() => {
                dispatch(setSelectedCode(cod)),
                  getSemesters({ codigoUniversitario: cod });
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  show: {
    backgroundColor: "#00000099",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
  },
  unshow: {
    display: "none",
  },
});
