import { Text, SafeAreaView, StyleSheet } from 'react-native';
import AssetExample from './components/AssetExample';
import Api from './components/Api';
import { Provider } from 'react-redux';
import { store } from './redux/store';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Provider store={store}>
      <Api />
    </Provider>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});