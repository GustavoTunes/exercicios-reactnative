import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import { styles } from './components/styles';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [conta, setConta] = useState('');

  function mult() {
    const resultado = num1 * num2;
    setConta(resultado.toString());
  }

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>Multiplicador de Números</Text>
      <TextInput
        style={styles.input}
        placeholder="Primeiro Valor"
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Segundo Valor"
        onChangeText={setNum2}
      />

      <Pressable style={styles.botao} onPress={mult}>
        <Text style={styles.botao}>Calcular</Text>
      </Pressable>
      <Text style={styles.resultado}>Resultado: {conta}</Text>
    </View>
  );
}

export default App;
