import { useState } from 'react';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Login() {
const [usuario, setUsuario] = useState('');
const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>faça seu login</Text>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Usuário:</Text>
          <TextInput
            value={usuario}
            style={styles.input}
            onChangeText={setUsuario}
          />
        </View>
        
        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Senha:</Text>
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
    fontSize: 25
  },
  input:{
    fontSize: 20,
    marginVertical: 5,
    borderBottomWidth: 2,
    borderColor: '#0f0',
    paddingLeft: 10,
    paddingVertical: 5,
  },
  titulo:{
    fontSize: 35,
    textTransform: 'uppercase',
    color: '#3262E7',
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  btn:{
    backgroundColor: 'green'
  }
});
