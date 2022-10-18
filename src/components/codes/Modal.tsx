import React, { FC } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { RadioButton } from "react-native-paper";
import { changeModalShow, setSelectedCode } from "../../store/state";

import { useGetSemesterByCodeMutation } from "../../store/api/upt-api";
import { setSemesters } from "../../store/state/semestersSlice";

interface Props {
  show?: boolean;
}

export const Modal: FC<Props> = ({ show }) => {
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
    <View style={tes ? styles.show : styles.unshow} >
<View
 style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'orange',
    padding:40,
    borderRadius:15,
    width:"80%"

  }}
>
<Text onPress={()=>dispatch(changeModalShow())} style={{padding:5}}>x</Text>

{codes.map((cod) => (
        // <Text  accessibilityValue={} key={cod}>{cod}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding:10,
          }}
          key={cod}
        >
            
          <Text >{cod}</Text>

          <RadioButton
            value={cod}
            // status={ checked === 'second' ? 'checked' : 'unchecked' }
            status={semesters == cod ? "checked" : "unchecked"}
            onPress={() => {
              dispatch(setSelectedCode(cod)),
                getSemesters({ codigoUniversitario: cod })
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
    width: '100%',
    height: '100%',
    position: "absolute",
    left: 0,

  },
  unshow: {
    display: "none",
  },
});
