import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotaoMagalu({ titulo, tipo = 'primario', onPress }) {
  const isPrimario = tipo === 'primario';
  
  return (
    <TouchableOpacity 
      style={[styles.botao, isPrimario ? styles.fundoPrimario : styles.fundoSecundario]} 
      onPress={onPress}
    >
      <Text style={[styles.texto, isPrimario ? styles.textoPrimario : styles.textoSecundario]}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: { 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginVertical: 5, 
    borderWidth: 1 
  },
  fundoPrimario: { backgroundColor: '#00a650', borderColor: '#00a650' },
  fundoSecundario: { backgroundColor: '#fff', borderColor: '#00a650' },
  texto: { fontWeight: 'bold', fontSize: 16 },
  textoPrimario: { color: '#fff' },
  textoSecundario: { color: '#00a650' }
});