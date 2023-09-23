import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import { styles } from './components/styles';

let charadaImg = 'https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc/wp-content/uploads/2014/12/BQizZKn.jpg.webp';


function App() {
  const [resultado, setResultado] = useState();
  
  function result(){
    setResultado( Math.floor(Math.random() * 11))
  }

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>

        <Image
          source={{ uri: charadaImg }}
          style={styles.imagem}
        />

      <Text style={styles.texto}>Pense em um Nº entre 0 e 10</Text>
      <Text style={styles.resultado}>{(resultado)}</Text>
      <Pressable style={styles.botao} onPress={result}>
        <Text style={styles.botao}>Verificar</Text>
      </Pressable>

    </View>
  );
}

export default App;
