import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contador: {
    fontSize: 50,
    textAlign: 'center',
    marginVertical: 35,
    borderRadius: 1,
    borderColor: 'black',
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  mais: {
    backgroundColor: 'green',
  },
  menos: {
    backgroundColor: 'red',
  },
  textoBotao: {
    color: 'white',
    fontSize: 30,
    paddingBottom: 5,
  },

  textoContador: {
    fontSize: 25,
    color: 'orange',
    textAlign: 'center',
    marginTop: 30,
  },
});

export { styles };
