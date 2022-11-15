import { useEffect, useRef } from 'react'
import { View, Text, Animated } from 'react-native'
import tw from 'twrnc'
import { OnBoarding } from './OnBoarding'
import {FormLogin , Header } from '../components/login'
import { Layout } from '../components/ui/layout/Layout'

export const Login = () => {
   useEffect(() => {}, [])



   return(
    <Layout header={<Header/>} children2={<FormLogin/>}/>
    )
}


//return <OnBoarding />
