import React, { FC } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal as ModalView,
} from "react-native";

import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { RadioButton } from "react-native-paper";
import { changeModalShow, setSelectedCode } from "../../store/state";

import { useGetSemesterByCodeMutation } from "../../store/api/upt-api";
import { setSemesters } from "../../store/state/semestersSlice";
import tw from "twrnc";

export const Modal = () => {
  const semesters = useAppSelector((state) => state.codes.selected);
  const codes = useAppSelector((state) => state.codes.codes);
  const modalVisible = useAppSelector((state) => state.codes.modalShow);

  //const semestersData = useAppSelector((state) => state.semesters);
  const dispatch = useAppDispatch();
  const [getSemesters, { data, isSuccess }] =
    useGetSemesterByCodeMutation();

  if (isSuccess) {
    //console.log(data.data[0]);
    dispatch(setSemesters(data.data[0]));
  }

  return (
    <ModalView animationType="fade" transparent={true} visible={modalVisible}>
      <View
        style={tw`w-full h-full bg-[#00000090]  justify-center items-center`}
      >
        <View style={tw`bg-red-400 rounded w-70 items-end pb-6 `}>
          <Text
            onPress={() => dispatch(changeModalShow())}
            style={tw`text-slate-100 p-2 text-2xl pr-4`}
          >
            x
          </Text>

          {codes.map((cod) => (
            <View
              style={tw`items-center  w-full justify-center flex-row  p-1`}
              key={cod}
            >
              <Text style={tw`text-slate-100`}>{cod}</Text>

              <RadioButton
                value={cod}
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
    </ModalView>
  );
};
