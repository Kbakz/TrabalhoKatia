import { useState } from 'react';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
const imageHeader = {uri: 'https://www.creativefabrica.com/wp-content/uploads/2022/10/13/Blue-curve-wave-abstract-design-bg-Graphics-41439498-2-580x387.png'}
// const imageBottom = {uri: {Wave}}

export default function Login() {
const [usuario, setUsuario] = useState('');
const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={imageHeader} style={styles.imageHeader}></ImageBackground>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>faça seu login</Text>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Usuário</Text>
          <TextInput
            value={usuario}
            style={styles.input}
            onChangeText={setUsuario}
          />
        </View>
        
        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Senha</Text>
          <TextInput
            value={senha}
            style={styles.input}
            onChangeText={setSenha}
          />
        </View>

        <Button title='ENTRAR' />
      </View>
      <View style={styles.bottom}>
        <ImageBackground source={imageHeader} style={styles.imageHeader}></ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header:{
    width: '100%',
    height: 100,
    backgroundColor: '#ff000077',
    transform: 'rotate(180deg)'
  },
  imageHeader:{
    flex: 1,
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
    fontSize: 25,
    textAlign: 'center'
  },
  input:{
    fontSize: 20,
    marginVertical: 5,
    borderBottomWidth: 2,
    borderColor: '#0f0',
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
  bottom:{
    width: '100%',
    height: 300,
    backgroundColor: '#ff000077',
  }
});
