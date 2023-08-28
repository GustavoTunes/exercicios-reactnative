import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [number, setNumber] = useState(0);

  function aumentar() {
    setNumber(number + 1);
  }

  function diminuir() {
    if (number >= 1) {
      setNumber(number - 1);
    } else {
      ('');
    }
  }

  return (
    <View>
      <Text style={styles.contador}>{number}</Text>
      <TouchableOpacity style={[styles.botao, styles.mais]} onPress={aumentar}>
        <Text style={styles.textoBotao}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botao, styles.menos]} onPress={diminuir}>
        <Text style={styles.textoBotao}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
