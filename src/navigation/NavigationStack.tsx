import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { propsNavigationStack } from './models'

import { Home, Login, Notes, Attendance, Schedule } from '../views'
import { Button } from 'react-native'
import { ButtonDarkMode } from '../components/ui'
const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export const NavigationStack = () => {
   return (
      <NavigationContainer>
         <Navigator initialRouteName='Home'>
            <Screen
               name='Login'
               component={Login}
               options={{ headerShown: false }}
            />
            <Screen
               name='Notes'
               component={Notes}
               options={{
                  headerStyle: { backgroundColor: '#383838' },
                  headerTintColor: 'white',
                  headerTitleAlign: 'center',
                  animation: 'slide_from_right',
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
                  headerRight: () => <ButtonDarkMode />,
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
               name='Home'
               component={Home}
               options={{
                  headerStyle: { backgroundColor: '#383838' },
                  headerTintColor: 'white',
                  headerTitleAlign: 'center',
                  headerShown: true,
                  headerRight: () => (
                     <Button
                        onPress={() => alert('This is a button!')}
                        title='Info'
                        color='#fff'
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
