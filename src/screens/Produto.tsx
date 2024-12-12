import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Produto() {
const [descricao, setDescricao] = useState('')
const [preco, setPreco] = useState('')
const [categoria, setCategoria] = useState('')
const [quantidade, setQuantidade] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>Produto</Text>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Descrição:</Text>
          <TextInput
            value={descricao}
            style={styles.input}
            onChangeText={setDescricao}
          />
        </View>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Preço:</Text>
          <TextInput
            value={preco}
            style={styles.input}
            keyboardType='numeric'
            onChangeText={setPreco}
          />
        </View>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Categoria:</Text>
          <TextInput
            value={categoria}
            style={styles.input}
            onChangeText={setCategoria}
          />
        </View>

        <View style={styles.formSingle}>
          <Text style={styles.textForm}>Quantidade:</Text>
          <TextInput
            value={quantidade}
            style={styles.input}
            keyboardType='numeric'
            onChangeText={setQuantidade}
          />
        </View>

        
        <Button title='ENTRAR' />
      </View>

      <View style={styles.tableContainer}>
        
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
  },
  tableContainer:{

  }
  
});
