//import { useEffect, useMemo } from "react"
import { View, Text } from "react-native"
import { Semester } from "../components/codes"
import { useGetCodesQuery } from '../store/api/upt-api'

import { setCodes } from "../store/state"
import { useAppDispatch, useAppSelector } from "../store/hooks"

export const Codes = () => {
    const {data,isError, isLoading,error, isFetching}=useGetCodesQuery(undefined)
   // const dispatch = useAppDispatch()
   

    //console.log(data)
    const array:string[] =["ss"]
    //const codigos = data.data.filter((comp:any)  => comp.codigoUniversitario) 
    //const codigos2 = data.data.map((comp:any)  => array.push(comp.codigoUniversitario)) 
   
    // console.log(codiguitos)
    // console.log(codigos)
    //console.log(array)
  

    if(isLoading) return (<Text>cargando....</Text>)

   
    // if(data!=null){
    //     const raa=useAppSelector(state => state.codes)
    //     console.log('raa')
    //     console.log(raa)
    //    }
    
    return (
        
    <View>
         
        <Text style={{marginTop:50, marginHorizontal:10}}>{JSON.stringify(data.data[0].codigoUniversitario)}</Text> 
        <Text style={{marginTop:50}}>dsd</Text>
        {
            array.map(ar=>(<Text key={ar}>{ar}</Text>))
        
        }
        <Semester data={data.data[0]}/>  
    </View>
  )
}
