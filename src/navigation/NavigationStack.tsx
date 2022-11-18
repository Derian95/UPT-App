import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { propsNavigationStack } from './models'

import { Home, Login, Notes, Attendance, Schedule, Codes, OnBoarding } from '../views'
import { Button, Image } from 'react-native'
import React from 'react'
import { ButtonDarkMode } from '../components/ui'
//import { ButtonDarkMode } from '../components/ui'
const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export const NavigationStack = () => {
   return (
      <NavigationContainer>
         <Navigator initialRouteName='Login'>
            <Screen
               name='Login'
               component={Login}
               options={{ headerShown: false }}
            />
            <Screen
               name='Codes'
               component={Codes}
               options={{ headerShown: false }}
            />
            <Screen
               name='Notes'
               component={Notes}
               
               options={{
                  title:'Notas',
                  headerTintColor: 'white',
                  headerTitleAlign: 'center',
                  animation: 'slide_from_right',
                  headerBackTitleVisible:true,
                  headerTransparent:true,
                  headerShown:false
                  

               }}
               
            />
            <Screen
               name='Attendance'
               component={Attendance}
               options={{
                  headerStyle: { backgroundColor: '#383838' },
                  headerTintColor: 'white',
                  headerTitleAlign: 'center',
                  animation: 'slide_from_right',
                  //headerRight: () => <ButtonDarkMode />,
                  title: 'Asistencia',
               }}
            />
            <Screen
               name='Schedule'
               component={Schedule}
               options={{
                  headerStyle: { backgroundColor: '#383838' },
                  headerTintColor: 'white',
                  headerTitleAlign: 'center',
                  animation: 'slide_from_right',
               }}
            />
            <Screen
               name='OnBoarding'
               component={OnBoarding}
               options={{
                  headerStyle: { backgroundColor: '#383838' },
                  headerTintColor: 'white',
                  headerTitleAlign: 'center',
                  animation: 'slide_from_right',
               }}
            />
            <Screen
               name='Home'
               component={Home}
               options={{
                  headerShadowVisible:false,
                  headerTintColor: 'white',
                  headerTitleAlign: 'center',
                  headerShown: true,
                  headerTransparent:true,
                  headerRight: () => (
                     // <Button
                     //    onPress={() => alert('This is a button!')}
                     //    title='Info'
                     //    color='transparent'
                        
                     // />
                    // <ButtonDarkMode/>
                    <Image
                    style={{
                      width: 28,
                      height: 28,
                      resizeMode: "contain",
                    }}
                    source={require("../../assets/logoupt.png")}
                  />
                  ),
                  headerBackVisible: true,
                  title: 'UPT',
               }}
            />
         </Navigator>
      </NavigationContainer>
   )
}
