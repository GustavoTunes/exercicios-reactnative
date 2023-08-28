import { View, Text } from 'react-native';
import Contador from './contador';
import { styles } from './contador/styles';

function App() {
  return (
    <View>
      <Text style={styles.textoContador}>Contador de Pessoas</Text>
      <Contador />
    </View>
  );
}

export default App;
