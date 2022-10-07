import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { propsNavigationStack } from './models'

import { Home, Login, Notes } from '../views'
import { Button } from 'react-native'
import { Asistencia } from '../views/Asistencia';
import { Horario } from '../views/Horario';

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
            <Screen name='Notes' component={Notes} />
            <Screen name='Asistencia' component={Asistencia} />
            <Screen name='Horario' component={Horario} />
            <Screen
               name='Home'
               component={Home}
               options={{
                  headerShown: false,
                  headerRight: () => (
                     <Button
                        onPress={() => alert('This is a button!')}
                        title='Info'
                        color='#fff'
                     />
                  ),
                  headerBackVisible: true,
                  headerStyle: { backgroundColor: 'red' },
               }}
            />
         </Navigator>
      </NavigationContainer>
   )
}
