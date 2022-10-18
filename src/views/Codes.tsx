//import { useEffect, useMemo } from "react"
import { View, Text, Button } from "react-native";
import { Modal, Semester } from "../components/codes";
import { useGetCodesQuery } from "../store/api/upt-api";

import {
  addCodes,
  changeModalShow,
  CodesState,
  setCodes,
  setSelectedCode,
} from "../store/state";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { setSemesters } from "../store/state/semestersSlice";
import { Datum } from "../interfaces";

export const Codes = () => {
  //const {data,isError, isLoading,error, isFetching}=useGetCodesQuery(undefined)
  const getCodes = useGetCodesQuery(undefined);
  const dispatch = useAppDispatch();

  const semesters = useAppSelector((state) => state.semesters);
  const codess = useAppSelector((state) => state.codes.codes);
  const showModalState = useAppSelector((state) => state.codes.modalShow);

  const array: string[] = [];

  useEffect(() => {
    if (getCodes.isSuccess) {
      dispatch(setSemesters(getCodes.data.data[0]));
      getCodes.data.data.map((comp: any) =>
        array.push(comp.codigoUniversitario)
      );
      dispatch(setCodes(array));
      dispatch(setSelectedCode(getCodes.data.data[0].codigoUniversitario));
    }
  }, [getCodes]);

  if (getCodes.isLoading) return <Text>Carganfo</Text>;

  // console.log('COMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
  // console.log('semesters')
  // console.log(semesters)
  // console.log('array')
  // console.log(array)
  // console.log('codes')

  return (
    <View style={{height:'100%'}}>
      {/* <Text style={{marginTop:50, marginHorizontal:10}}>{JSON.stringify(data.data[0].codigoUniversitario)}</Text>  */}
      <Text style={{ marginTop: 10 }}>dsd</Text>
      {/* {
            array.map(ar=>(<Text key={ar}>{ar}</Text>))
        
        } */}

      <Button
        title="Ver codigos en pertenecia"
        onPress={() => dispatch(changeModalShow())}
      />

      <Semester />
      <Modal show={showModalState} />


    </View>
  );
};
