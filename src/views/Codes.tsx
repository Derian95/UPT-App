//import { useEffect, useMemo } from "react"
import { useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { HeaderCodes, Modal, Semester } from "../components/codes";
import { useAppDispatch } from "../store/hooks";
import { useGetCodesQuery } from "../store/api/upt-api";
import { setSemesters } from "../store/state/semestersSlice";
import { changeModalShow, CodesModal, setCodes, setSelectedCode } from "../store/state";
import { Layout } from "../components/ui/layout/Layout";
import { Loader } from "../components/loader";

export const Codes = () => {
  const array: string[] = [];
  const modalArray:CodesModal[]=[]

  const getCodes = useGetCodesQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (getCodes.isSuccess) {
      dispatch(setSemesters(getCodes.data.data[0]));

      getCodes.data.data.map((comp: any) =>
      modalArray.push({code:comp.codigoUniversitario,name:comp.escuela})
//{comp.codigoUniversitario
      );

      dispatch(setCodes(modalArray));
      dispatch(setSelectedCode(getCodes.data.data[0].codigoUniversitario));
    }
    
  }, [getCodes]);
  //console.log('modalArray')
  //console.log(modalArray)

  if (getCodes.isLoading) return <Loader/>;
  //console.log(getCodes.data)
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
