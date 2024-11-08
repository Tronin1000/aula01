import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Ah ce reparou</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  texto: {
    color: 'green',
    fontSize: 50,
  }
});
