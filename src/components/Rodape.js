import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ItemMenu = ({ icone, texto, ativo }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={[styles.icone, ativo && styles.iconeAtivo]}>{icone}</Text>
    <Text style={[styles.texto, ativo && styles.textoAtivo]}>{texto}</Text>
  </TouchableOpacity>
);

export default function Rodape() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <ItemMenu icone="🏠" texto="Início" ativo={true} />
        <ItemMenu icone="📋" texto="Departamentos" />
        <ItemMenu icone="❤️" texto="Favoritos" />
        <ItemMenu icone="🛍️" texto="Sacola" />
        <ItemMenu icone="👤" texto="Sua conta" />
      </View>
      <View style={styles.barraAzul}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    elevation: 10, // Sombra
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  item: {
    alignItems: 'center',
    flex: 1,
  },
  icone: {
    fontSize: 20,
    color: '#999',
    marginBottom: 2,
  },
  iconeAtivo: {
    color: '#0086ff',
  },
  texto: {
    fontSize: 10,
    color: '#999',
  },
  textoAtivo: {
    color: '#0086ff',
    fontWeight: 'bold',
  },
  barraAzul: {
    height: 48,
    backgroundColor: '#0086ff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 60,
  },

});