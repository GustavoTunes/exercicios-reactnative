import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import { styles } from './components/styles';

let gasImg = 'https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80';


function App() {
  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [conta, setConta] = useState('');

function mult() {
  const resultado = eta / gas;
  if (resultado < 0.7) {
    setConta('Etanol');
  } else {
    setConta('Gasolina');
  }
}

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

        <Image
          source={{ uri: gasImg }}
          style={styles.imagem}
        />


      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        onChangeText={setEta}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        onChangeText={setGas}
      />

      <Pressable style={styles.botao} onPress={mult}>
        <Text style={styles.botao}>Verificar</Text>
      </Pressable>
      <Text style={styles.resultado}>{conta}</Text>
    </View>
  );
}

export default App;
