import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import BotaoMagalu from '../components/BotaoMagalu';
import Rodape from '../components/Rodape';

export default function DetalhesScreen({ route, navigation }) {
  const { produto } = route.params;

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnVoltar}>
            <Text style={styles.iconeVoltar}>←</Text>
          </TouchableOpacity>
          <TextInput style={styles.searchInput} placeholder="Busca no Magalu" placeholderTextColor="#999" />
          <TouchableOpacity style={styles.btnSino}>
            <Text style={styles.iconeSino}>🔔</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cepBar}>
          <Text style={styles.cepText}>📍 Digite seu CEP</Text>
          <Text style={styles.cepText}>v</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <Image source={produto.imagem} style={styles.imagem} resizeMode="contain" />
        <View style={styles.avaliacaoContainer}>
          <Text style={styles.estrela}>⭐</Text>
          <Text style={styles.textoAvaliacao}>{produto.avaliacao} (8)</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.titulo}>{produto.titulo}</Text>
          <Text style={styles.vendidoPor}>Vendido e entregue por <Text style={styles.lojaDestaque}>{produto.loja}</Text></Text>
        </View>

        <View style={styles.separadorFino} />
        <View style={styles.infoContainer}>
          <View style={styles.precoRow}>
            <Text style={styles.preco}>R$ {produto.preco.toFixed(2).replace('.', ',')}</Text>
            <Text style={styles.textoPix}> no Pix</Text>
            <View style={styles.tagDesconto}>
              <Text style={styles.textoDesconto}>5% OFF</Text>
            </View>
          </View>
          
          <Text style={styles.parcela}>ou 1x de R$ {produto.precoOriginal ? produto.precoOriginal.toFixed(2).replace('.', ',') : '79,90'} sem juros</Text>
          
          <TouchableOpacity>
            <Text style={styles.linkPagamento}>Ver opções de pagamento {'>'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separadorFino} />
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.freteContainer}>
            <Text style={styles.iconeFrete}>📍</Text>
            <Text style={styles.textoFrete}>Calcular frete e prazo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separadorFino} />
        <View style={styles.botoesWrapper}>
          <BotaoMagalu titulo="Adicionar à sacola" tipo="primario" onPress={() => navigation.navigate('Carrinho', { produto: produto })} />
          <BotaoMagalu titulo="Comprar agora" tipo="secundario" onPress={() => console.log('Comprar agora')} />
        </View>

        <View style={styles.separadorGrosso} />

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Descrição e ficha técnica</Text>
          <Text style={styles.textoCinza}>Código {produto.codigo || '692281200'}</Text>
          <Text style={styles.linkAzulCentro}>Ver ficha técnica completa</Text>
        </View>

        <View style={styles.separadorGrosso} />

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Informações da loja</Text>
          <View style={styles.lojaRow}>
            <View style={styles.lojaIcone}><Text>🏪</Text></View>
            <View>
              <Text style={styles.lojaNome}>{produto.loja}</Text>
              <Text style={styles.textoCinza}>Lojista Magalu desde 2018</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { flex: 1 },
  header: { backgroundColor: '#0086ff', paddingTop: 40 },
  topBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingBottom: 10 },
  btnVoltar: { padding: 10 },
  iconeVoltar: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  searchInput: { flex: 1, backgroundColor: '#fff', borderRadius: 8, padding: 8, fontSize: 16, marginHorizontal: 10 },
  btnSino: { padding: 10 },
  iconeSino: { fontSize: 20 },
  cepBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#0070d6' },
  cepText: { color: '#fff', fontSize: 14, fontWeight: '500' },
  imagem: { width: '100%', height: 250, marginTop: 10 },
  
  /* Estilos Novos Adicionados */
  avaliacaoContainer: { flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20, marginBottom: 10 },
  estrela: { color: '#fbc02d', fontSize: 16, marginRight: 5 },
  textoAvaliacao: { color: '#555', fontSize: 14 },
  
  infoContainer: { paddingHorizontal: 20, paddingVertical: 15 },
  titulo: { fontSize: 18, color: '#333', marginBottom: 5, fontWeight: '500' },
  vendidoPor: { fontSize: 13, color: '#777' },
  lojaDestaque: { color: '#0086ff', fontWeight: 'bold' },
  
  precoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  preco: { fontSize: 36, fontWeight: 'bold', color: '#111' },
  textoPix: { fontSize: 14, color: '#555', marginLeft: 5 },
  tagDesconto: { backgroundColor: '#e6f5ea', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, marginLeft: 10 },
  textoDesconto: { color: '#00a650', fontWeight: 'bold', fontSize: 12 },
  parcela: { fontSize: 14, color: '#555', marginBottom: 15 },
  linkPagamento: { color: '#0086ff', fontWeight: 'bold', fontSize: 14 },
  
  freteContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', padding: 15, borderRadius: 8 },
  iconeFrete: { fontSize: 20, marginRight: 10, color: '#0086ff' },
  textoFrete: { fontSize: 16, color: '#333', fontWeight: '500' },
  
  botoesWrapper: { paddingHorizontal: 20, paddingBottom: 20 },
  
  separadorFino: { height: 1, backgroundColor: '#eee', width: '100%' },
  separadorGrosso: { height: 8, backgroundColor: '#f5f5f5', width: '100%' },
  
  secao: { padding: 20 },
  tituloSecao: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  textoCinza: { color: '#777', fontSize: 14, marginBottom: 15 },
  linkAzulCentro: { color: '#0086ff', fontWeight: 'bold', textAlign: 'center', paddingVertical: 10 },
  lojaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  lojaIcone: { width: 50, height: 50, backgroundColor: '#eef', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  lojaNome: { fontSize: 16, fontWeight: 'bold' },
});