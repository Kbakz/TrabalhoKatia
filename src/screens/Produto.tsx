import axios from 'axios';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const API_URL = 'http://localhost:3000/usuarios';

interface Produto{
  id: number;
  descricao: string;
  preco: number;
  categoria: string;
  quantidade: number;
}


export default function Produto() {
const [descricao, setDescricao] = useState('')
const [preco, setPreco] = useState('')
const [categoria, setCategoria] = useState('')
const [quantidade, setQuantidade] = useState('')
const [editingId, setEditingId] = useState(null)
const[product, setProduct] = useState([])

const fetchUsers = async()=>{
  try{
    const responsive = await axios.get(API_URL);
  } catch(error){
    console.log(error)
  }
}

const handleSubmit = async()=>{
  if(!descricao || !preco || categoria || quantidade){
    Alert.alert("Nome e email são campos obrigatórios")
    return
  }


  try{
    if(editingId)
      await axios.put(`${API_URL}/${editingId}`,product)
    else
      await axios.put(API_URL, product)
    
    resetForm();
    fetchUsers();

  }catch(error){
    console.log(error)
  }
}

const resetForm = ()=>{
  setDescricao('')
  setPreco('')
  setCategoria('')
  setQuantidade('')
  setEditingId(null)
}

const handleDelete = async(id)=>{
  try{
    await axios.delete(`${API_URL}/${id}`)
    fetchUsers()
  } catch(error){
    console.log(error)
  }
}

const handleEdit = (product)=>{
  setDescricao(product.descricao)
  setPreco(product.preco)
  setCategoria(product.categoria)
  setQuantidade(product.quantidade)
  setEditingId(null)
  setEditingId(product.id);
}

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

        
        <Button 
          title='Cadasatrar' 
          color="#B732E7"  
        />
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
    overflow: 'scroll'
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
    paddingLeft: 15,
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
  table:{
    marginTop: 10,
    overflow: 'scroll'
  },
  tHeader:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#32DBE7'
  },
  th:{
    padding: 10,
    fontSize: 18,
    color: "#fff",
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tBody:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  tb:{
    padding: 10,
  }
  
});
