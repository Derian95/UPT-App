import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Appearance, TouchableOpacity } from 'react-native';
import { Home } from './src/views/Home';
import { Login } from './src/views/Login';


export default function App() {
  return (
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test:{
    backgroundColor:'gray',
    color:'white'
  }
});
