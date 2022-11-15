//import { useEffect, useMemo } from "react"
import { useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { HeaderCodes, Modal, Semester } from "../components/codes";
import { useAppDispatch } from "../store/hooks";
import { useGetCodesQuery } from "../store/api/upt-api";
import { setSemesters } from "../store/state/semestersSlice";
import { changeModalShow, setCodes, setSelectedCode } from "../store/state";
import { Layout } from "../components/ui/layout/Layout";
import { Loader } from "../components/loader";

export const Codes = () => {
  const array: string[] = [];

  const getCodes = useGetCodesQuery(undefined);
  const dispatch = useAppDispatch();

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

  if (getCodes.isLoading) return <Loader/>;

  return (
    // <View style={{ height: "100%", backgroundColor:'black' }}>
    
    //   <Semester />
    //   <Modal />
    // </View>

    <Layout 
    header={
     <HeaderCodes/>
    } 
    children2={
      <Semester/>}
    />
    
  );
};
