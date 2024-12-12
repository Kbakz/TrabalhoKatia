import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

const API_URL = 'http://localhost:3000/usuarios';

interface Usuario{
  id: number;
  nome: string;
  email: string;
  usuario: string;
  senha: string;
}

export default function Usuario() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [editingId, setEditingId] = useState(null)
  const[users, setUsers] = useState([])
  useEffect(()=>{
    fetchUsers()
  },[])

  const fetchUsers = async()=>{
    try{
      const responsive = await axios.get(API_URL);
    } catch(error){
      console.log(error)
    }
  }

  const handleSubmit = async()=>{
    if(!nome || !email){
      Alert.alert("Nome e email são campos obrigatórios")
      return
    }

    const user = {nome, email};

    try{
      if(editingId)
        await axios.put(`${API_URL}/${editingId}`,user)
      else
        await axios.put(API_URL, user)
      
      resetForm();
      fetchUsers();

    }catch(error){
      console.log(error)
    }
  }

  const resetForm = ()=>{
    setNome('')
    setEmail('')
    setUsuario('')
    setSenha('')
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

  const handleEdit = (user)=>{
    setNome(user.nome);
    setEmail(user.email);
    setNome(user.usuario);
    setEmail(user.senha);
    setEditingId(user.id);
  }

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
        
        <Button 
          title='Cadastrar' 
          color="#B732E7"  
        />

        <FlatList
          data={users}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item})=>(
            <View style={styles.viewBotao}>
              <Button
                title='Editar'
                onPress={()=>handleEdit(item)}
              />
              <Button
                title='Deletar'
                onPress={()=>handleDelete(item.id)}
              />
            </View>
          )}
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
  inputFocus:{
    borderColor: '#0ff',
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
    fontSize: 18
  },
  viewBotao:{

  }

  
});
