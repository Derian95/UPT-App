import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {RootState} from '../index'


export const uptApiAuth = createApi({
    reducerPath: 'uptApiAuth',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://172.30.101.46:8080/api/',
       /* prepareHeaders:(headers)=>{
            const token = localStorage.getItem('token');
            if (token) {
              headers.set('token', token);
            }
            return headers
        }*/
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: { idSistema: number; idTipoUsuario: number, usuario:string, contrasenia:string }) => {
                return {
                    url: '/identity/login',
                    method: 'post',
                    body,
                }
            },
        })
       
        

       
})

})

//export const { useGetPokemonByNameQuery } = agendaApi
export const { useLoginUserMutation } = uptApiAuth