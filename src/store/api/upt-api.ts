import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {RootState} from '../index'


export const uptApi = createApi({
    reducerPath: 'uptApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://172.30.101.46:9090/api/',
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
            query: (body: { codigo: string; pass: string }) => {
                return {
                    url: '/api/auth/signin',
                    method: 'post',
                    body,
                }
            },
        }),
        sendNewEvent:builder.mutation({
            query:(body)=>{
                return{
                    url:'/api/event/newEvent',
                    method: 'post',
                    body,
                }
            }
        }),
        getCodes:builder.query<any, void>({
            query:()=>'estudiante/codigos/2010037630'
        }),

        getEvent:builder.query<Event, string | undefined>({
            query:(id)=>`/api/event/public/${id}`
        }),

        getEventsByUser:builder.query<Event[], void>({
            query:()=>`/api/event/getEventUser`,
        })
        
    }),
})

//export const { useGetPokemonByNameQuery } = agendaApi
export const { useLoginUserMutation,useSendNewEventMutation, useGetCodesQuery, useGetEventQuery, useGetEventsByUserQuery } = uptApi