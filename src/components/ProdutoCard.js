import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProdutoCard({ produto, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={produto.imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.titulo} numberOfLines={2}>{produto.titulo}</Text>
      <Text style={styles.preco}>R$ {produto.preco.toFixed(2).replace('.', ',')}</Text>
      <Text style={styles.parcela}>10x sem juros</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'flex-start',
  },
  imagem: {
    width: '100%',
    height: 120,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  parcela: {
    fontSize: 10,
    color: '#777',
    marginTop: 2,
  }
});