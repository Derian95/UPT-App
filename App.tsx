import { StyleSheet } from 'react-native';
import { NavigationStack } from './src/navigation'
import { Provider } from 'react-redux'
import { store } from './src/store'

function App() {
  return (
    <Provider store={store}>

   <NavigationStack/>
   </Provider>
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
