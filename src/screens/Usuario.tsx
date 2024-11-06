import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Usuario() {
const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [usuario, setUsuario] = useState('')
const [senha, setSenha] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>Usuários</Text>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Nome:</Text>
          <TextInput
            value={nome}
            style={styles.input}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Email:</Text>
          <TextInput
            value={email}
            style={styles.input}
            keyboardType='email-address'
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Usuário:</Text>
          <TextInput
            value={usuario}
            style={styles.input}
            onChangeText={setUsuario}
          />
        </View>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Senha: </Text>
          <TextInput
            value={senha}
            style={styles.input}
            onChangeText={setSenha}
          />
        </View>
        
        <Button title='ENTRAR' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer:{
    backgroundColor: '#ccc',
    textAlign: 'center',
    paddingVertical: 40,
    paddingHorizontal: 15,
    width: '95%',
    maxWidth: 450,
  },
  formSingle:{
    marginVertical: 10
  },
  textForm:{
    color: '#fff',
    fontSize: 25,
  },
  input:{
    fontSize: 20,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderColor: '#aaa',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 5
  },
  titulo:{
    fontSize: 35,
    textTransform: 'uppercase',
    color: '#3262E7',
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  btn:{
    backgroundColor: 'green'
  },
  
});
