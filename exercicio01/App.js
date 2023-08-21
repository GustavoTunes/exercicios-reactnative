import { View, Text, Image } from 'react-native';
import { Linking } from 'react-native';

function App(){
  return(
    <View style={{margin: 15}}>
        <Image
        source={{ uri: 'https://media.licdn.com/dms/image/C4D03AQHdtMUuZI-bYQ/profile-displayphoto-shrink_800_800/0/1663990143442?e=2147483647&v=beta&t=J5P70RcNUMh3f86yeG1gntCNyTP-o_EDVlSkKCDRUnc'}}
          style={{ width: 240, height: 240, alignSelf: 'center'}}
        />
      <Text style={{marginTop: 10}}>Dados pessoais:</Text>
      <Text>Gustavo Souza Tunes</Text>
     <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://github.com/GustavoTunes')}>
Github
</Text>
     <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://br.linkedin.com/in/gustavotunes')}>
Linkedin
</Text>

      <Text style={{marginTop: 10}}>Formação:</Text>
      <Text>2021-2023 FATEC BS: Sistemas para Internet</Text>
      <Text>2017-2019 ETEC Escolástica Rosa: Ensino médio</Text>


      <Text style={{marginTop: 10}}>Experiência:</Text>
      <Text>2016-2020 Assistência técnica para desktops, notebooks e impressoras </Text>

      <Text style={{marginTop: 10}}>Projetos:</Text>
     <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://github.com/GustavoTunes?tab=repositories')}>
  Repositório Github
</Text>


    </View>
  )
}


export default App;