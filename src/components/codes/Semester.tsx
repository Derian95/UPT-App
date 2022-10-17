import { FC } from 'react'
import {View, Text} from 'react-native'

import { Datum } from '../../interfaces'


interface Props{
    data:Datum
}
export const Semester:FC<Props> = ( { data } ) => {

    if(data==null) return <Text>Cargandin</Text>

  return (
    <View style={{height:150, backgroundColor:'red', }}>
        <Text>{data.codigoUniversitario}</Text>
        <Text>{data.escuela}</Text>
        <Text>{data.idPtaDependenciaFijo}</Text>
        <Text>{data.itemEstamento}</Text>
        <Text>{data.tipo}</Text>


        {
            data.semestres.map(ra=>(<Text style={{padding:2, backgroundColor:'blue',margin:2, color:'white'}} key={ra.idSemestre}>{ra.observacion}</Text>))
        }
    </View>
  )
}
