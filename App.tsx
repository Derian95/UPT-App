import { StyleSheet, Appearance, Text } from 'react-native'
import { NavigationStack } from './src/navigation'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { StatusBar } from 'expo-status-bar'

function App() {
   return (
      <Provider store={store}>
         <StatusBar backgroundColor='#2C305A' style='light' />
         <NavigationStack />
      </Provider>
   )
}

export default App

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   test: {
      backgroundColor: 'gray',
      color: 'white',
   },
})
