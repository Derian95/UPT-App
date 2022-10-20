import { FC } from 'react'
import {View, Text} from 'react-native'

import { Datum } from '../../interfaces'
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { SemesterCard } from './SemesterCard'








export const Semester= () => {
const semesters = useAppSelector((state) => state.semesters)

    
    // if(data==null) return <Text>Cargandin</Text>
    if(semesters == null) return <Text>Cargandin***</Text>
    const {codigoUniversitario, escuela, tipo,semestres, itemEstamento} = semesters
//console.log(semesters)
  return (
    <View style={{height:450, backgroundColor:'red', }}>
        <Text>{codigoUniversitario}</Text>
        <Text>{escuela}</Text>
        {/*<Text>{itemEstamento}</Text>*/}
        <Text>{tipo}</Text>


        {
            semestres.map(sem=>(
            // <Text style={{padding:2, backgroundColor:'blue',margin:2, color:'white'}} key={ra.idSemestre}>{ra.observacion}</Text>
            <SemesterCard semester={sem} key={sem.observacion} stament={itemEstamento}/>
            ))
        }
    </View>
  )
}
