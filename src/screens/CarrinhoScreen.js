import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import BotaoMagalu from '../components/BotaoMagalu';
import Rodape from '../components/Rodape'; 

export default function CarrinhoScreen({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.produtoContainer}>
          <Image source={produto.imagem} style={styles.imagem} resizeMode="contain" />
          <View style={styles.infoProduto}>
            <Text style={styles.titulo} numberOfLines={2}>{produto.titulo}</Text>
            <Text style={styles.excluirBtn}>Excluir</Text>
            
            <View style={styles.precoRow}>
              <View style={styles.quantidadeBox}>
                <Text>1 v</Text>
              </View>
              <View>
                <Text style={styles.preco}>R$ {produto.preco.toFixed(2).replace('.', ',')} <Text style={styles.pixText}>no Pix</Text></Text>
                <Text style={styles.parcela}>ou R$ {produto.precoOriginal ? produto.precoOriginal.toFixed(2).replace('.', ',') : '79,90'} no cartão</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerCheckout}>
        <View style={styles.cupomBox}>
          <Text style={styles.cupomText}>🎫 Tem um código de cupom?</Text>
          <Text style={styles.inserirText}>Inserir</Text>
        </View>
        
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <View style={styles.totalPrecoBox}>
            <Text style={styles.totalPreco}>R$ {produto.preco.toFixed(2).replace('.', ',')} <Text style={styles.pixText}>no Pix</Text></Text>
            <Text style={styles.totalParcela}>ou R$ {produto.precoOriginal ? produto.precoOriginal.toFixed(2).replace('.', ',') : '79,90'} no cartão</Text>
          </View>
        </View>

        <BotaoMagalu 
          titulo="Continuar" 
          tipo="primario"
          onPress={() => console.log('Finalizar compra')} 
        />
      </View>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scroll: { flex: 1 },
  produtoContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 15,
    marginTop: 10,
  },
  imagem: { width: 80, height: 80, marginRight: 15 },
  infoProduto: { flex: 1 },
  titulo: { fontSize: 14, color: '#333' },
  excluirBtn: { color: '#0086ff', fontSize: 12, marginTop: 5, fontWeight: 'bold', alignSelf: 'flex-end' },
  precoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  quantidadeBox: { borderWidth: 1, borderColor: '#ccc', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 5 },
  preco: { fontSize: 16, fontWeight: 'bold' },
  pixText: { fontSize: 12, fontWeight: 'normal' },
  parcela: { fontSize: 10, color: '#777', textAlign: 'right' },
  
  footerCheckout: { backgroundColor: '#fff', padding: 15, borderTopWidth: 1, borderColor: '#eee' },
  cupomBox: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f0f9f4', padding: 15, borderRadius: 8, marginBottom: 15 },
  cupomText: { color: '#00a650', fontWeight: 'bold' },
  inserirText: { color: '#0086ff', fontWeight: 'bold' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  totalLabel: { fontSize: 18, fontWeight: 'bold' },
  totalPrecoBox: { alignItems: 'flex-end' },
  totalPreco: { fontSize: 18, fontWeight: 'bold' },
  totalParcela: { fontSize: 12, color: '#777' }
});