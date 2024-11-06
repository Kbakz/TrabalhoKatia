import { StyleSheet, Text, View } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoName}>LOGO</Text>
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

  logo:{
    backgroundColor: '#E7B732',
    paddingHorizontal: 60,
    paddingVertical: 60,
    borderRadius: 20
  },
  logoName:{
    color: '#fff',
    fontSize: 25,
    textTransform: 'uppercase'
  }
});
