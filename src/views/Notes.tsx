import { View, Text, ActivityIndicator } from 'react-native'
import { HeaderNotes, NotesList } from '../components/notas'
import tw from 'twrnc'
import { useNavigation, useRoute } from '@react-navigation/native'
import { propsStack, routeProps } from '../navigation/models'
import { useGetNotesSemesterMutation } from '../store/api/upt-api'
import { useEffect, useState } from 'react'
import { Loader } from '../components/loader'
import { Layout } from '../components/ui/layout/Layout'
export const Notes = () => {
   const navigate = useNavigation<propsStack>()
   const route = useRoute<routeProps>()
   const { idSemester, idStament } = route.params
   const [notesCources, { data, isLoading, isSuccess, isError }] =
      useGetNotesSemesterMutation()

   const [header, setHeader] = useState(false)
   const changeHEader = () => {
      navigate.setOptions({
         headerShown: true,
      })
   }
   useEffect(() => {
      notesCources({
         codigoUniversitario: 2017059277,
         idSemestre: idSemester,
         itemEstamento: idStament,
      })
   }, [])

   if (isLoading) return <Loader />

   return (
      <View style={tw`h-full`}>
         <View style={tw`h-3/11 bg-[#2C305A] rounded-b-3xl justify-end`}>
         {isSuccess ? (
                     data.data != null ? (
                        <HeaderNotes
                           ciclo={data.data[0].cicloUbicacion}
                           matricula={data.data[0].matriculaPagada}
                           fecha={data.data[0].fecha}
                        />
                     ) : (
                        <Text style={tw`text-white`}>
                           {data.mensajeError[0].mensaje}
                        </Text>
                     )
                  ) : null}
         </View>
         <View style={tw`h-8/11 bg-white rounded-b-3xl `}>
         {isSuccess ? (
                     data.data != null ? (
                        <NotesList notes={data.data[0]} />
                     ) : (
                        <Text style={tw`text-white`}>
                           {data.mensajeError[0].mensaje}
                        </Text>
                     )
                  ) : null}
         </View>
      </View>
   )
}
{
   /* <Layout
            header={
               <>
                  {isSuccess ? (
                     data.data != null ? (
                        <HeaderNotes
                           ciclo={data.data[0].cicloUbicacion}
                           matricula={data.data[0].matriculaPagada}
                           fecha={data.data[0].fecha}
                        />
                     ) : (
                        <Text style={tw`text-white`}>
                           {data.mensajeError[0].mensaje}
                        </Text>
                     )
                  ) : null}
               </>
            }
            children2={
               <>
                  {isSuccess ? (
                     data.data != null ? (
                        <NotesList notes={data.data[0]} />
                     ) : (
                        <Text style={tw`text-white`}>
                           {data.mensajeError[0].mensaje}
                        </Text>
                     )
                  ) : null}
               </>
            }
         /> */
}
