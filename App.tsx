import { StyleSheet } from 'react-native';
import { NavigationStack } from './src/navigation'

function App() {
  return (
   <NavigationStack/>
  );
}

export default App;

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
