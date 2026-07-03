import React from 'react';
import { View, FlatList, StyleSheet, TextInput, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { produtosMock } from '../mocks/produtos';
import ProdutoCard from '../components/ProdutoCard';
import Rodape from '../components/Rodape';

const CardHorizontal = ({ titulo, preco, imagem, tag, onPress }) => (
  <TouchableOpacity style={styles.cardHorizontal} onPress={onPress}>
    <Text style={styles.tagTopoHorizontal}>{tag}</Text>
    <Image source={imagem} style={styles.imagemCardHorizontal} resizeMode="contain" />
    <Text style={styles.tituloCardHorizontal} numberOfLines={2}>{titulo}</Text>
    <Text style={styles.precoCardHorizontal}>R$ {preco}</Text>
    <Text style={styles.parcelaCardHorizontal}>1x sem juros</Text>
  </TouchableOpacity>
);

const HeaderHome = ({ navigation }) => {
  const categorias = [
    { nome: 'Categorias', icone: '☰' },
    { nome: 'Cupons', icone: '🎫' },
    { nome: 'Relâmpago', icone: '⚡' },
    { nome: 'Vídeos', icone: '▶️' },
    { nome: 'Álbum', icone: '📖' },
  ];

  return (
    <View style={styles.headerHomeContainer}>
      <View style={styles.bannerMagaluPay}>
        <Text style={styles.textoMagaluPay}>magalupay</Text>
        <View style={{flex: 1}} />
        <Text style={styles.textoAcesse}>Acesse agora {'>'}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrosselSecao}>
        <View style={[styles.bannerPromo, { backgroundColor: '#0055ff' }]}>
          <Text style={styles.textoBannerBranco}>OFERTAS ANTECIPADAS</Text>
          <Text style={styles.textoBannerGrande}>7.7 PAY DAY</Text>
          <Text style={styles.textoBannerAmarelo}>com até 60% OFF</Text>
        </View>
        <View style={[styles.bannerPromo, { backgroundColor: '#ff0055' }]}>
          <Text style={styles.textoBannerBranco}>OFERTAS EXCLUSIVAS</Text>
          <Text style={styles.textoBannerGrande}>APP MAGALU</Text>
        </View>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrosselSecao}>
        <CardHorizontal 
          tag="Tá vendendo muito" 
          titulo="Blister com 12 Pacotes de Figurinhas" 
          preco="71,24" 
          imagem={produtosMock[2]?.imagem || produtosMock[0]?.imagem} 
          onPress={() => navigation.navigate('Detalhes', { produto: produtosMock[2] || produtosMock[0] })}
        />
        <CardHorizontal 
          tag="Os mais desejados" 
          titulo="Smart TV 50 TCL 4K UHD" 
          preco="2.089,05" 
          imagem={produtosMock[1]?.imagem || produtosMock[0]?.imagem} 
          onPress={() => navigation.navigate('Detalhes', { produto: produtosMock[1] || produtosMock[0] })}
        />
        <CardHorizontal 
          tag="Os mais vistos" 
          titulo="Conjunto de Copos 200ml Paulista" 
          preco="75,91" 
          imagem={produtosMock[0]?.imagem} 
          onPress={() => navigation.navigate('Detalhes', { produto: produtosMock[0] })}
        />
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrosselCategorias}>
        {categorias.map((item, index) => (
          <TouchableOpacity key={index} style={styles.iconeCarrossel}>
            <View style={styles.circuloAzul}>
              <Text style={styles.emojiCarrossel}>{item.icone}</Text>
            </View>
            <Text style={styles.textoIcone}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrosselSecao}>
        <View style={[styles.bannerOfertaDia, { backgroundColor: '#ff0080' }]}>
          <Text style={styles.textoBannerOfertaAmarelo}>OFERTA</Text>
          <Text style={styles.textoBannerOfertaAmarelo}>DO DIA</Text>
        </View>
        <View style={[styles.bannerOfertaDia, { backgroundColor: '#ffcc00' }]}>
          <Text style={styles.textoRosaPequeno}>KIT 6 TAÇAS DE VIDRO</Text>
          <Text style={styles.textoRosaGrande}>R$ 19,90</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.fundoAzulTop} />
      <View style={styles.header}>
        <View style={styles.topBar}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Busca no Magalu" 
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.btnSino}>
            <Text style={styles.iconeSino}>🔔</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.locationBar}>
          <Text style={styles.locationText}>📍 Ver ofertas para minha região</Text>
          <Text style={styles.locationText}>{'>'}</Text>
        </View>
      </View>
      <FlatList
        data={produtosMock}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={() => <HeaderHome navigation={navigation} />} 
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <ProdutoCard 
            produto={item} 
            onPress={() => navigation.navigate('Detalhes', { produto: item })} 
          />
        )}
      />
      
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: { flex: 1, backgroundColor: '#f5f5f5' },
  
  /* fundo azul */
  fundoAzulTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 350, 
    backgroundColor: '#0086ff',
  },

  /* Cabeçalho */
  header: { backgroundColor: 'transparent', paddingTop: 40 }, 
  topBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingBottom: 10 },
  searchInput: { flex: 1, backgroundColor: '#fff', borderRadius: 8, padding: 10, fontSize: 16 },
  btnSino: { paddingLeft: 15 },
  iconeSino: { fontSize: 24, color: '#fff' },
  locationBar: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingBottom: 15 },
  locationText: { color: '#fff', fontSize: 14, fontWeight: '500' },
  
  /* Estrutura da Lista */
  listContainer: { paddingBottom: 20 },
  headerHomeContainer: { paddingTop: 5 },
  
  /* MagaluPay */
  bannerMagaluPay: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, marginHorizontal: 10, marginBottom: 15, borderRadius: 8, elevation: 3 },
  textoMagaluPay: { color: '#0086ff', fontWeight: 'bold', fontSize: 16, marginLeft: 5 },
  textoAcesse: { color: '#0086ff', fontWeight: 'bold' },

  /* Carrosséis */
  carrosselSecao: { paddingLeft: 10, marginBottom: 20 },
  
  /* Banners Ofertas */
  bannerPromo: { width: 280, height: 140, borderRadius: 8, marginRight: 10, padding: 15, justifyContent: 'center', elevation: 2 },
  textoBannerBranco: { color: '#fff', fontSize: 12, fontWeight: 'bold', backgroundColor: '#ff0055', alignSelf: 'flex-start', paddingHorizontal: 5, borderRadius: 4, marginBottom: 5 },
  textoBannerGrande: { color: '#fff', fontSize: 28, fontWeight: 'bold', fontStyle: 'italic' },
  textoBannerAmarelo: { color: '#ffcc00', fontSize: 18, fontWeight: 'bold' },

  /* Cards Horizontais */
  cardHorizontal: { width: 140, backgroundColor: '#fff', borderRadius: 8, padding: 10, marginRight: 10, elevation: 3 },
  tagTopoHorizontal: { fontSize: 10, color: '#333', fontWeight: 'bold', marginBottom: 5 },
  imagemCardHorizontal: { width: '100%', height: 90, marginBottom: 5 },
  tituloCardHorizontal: { fontSize: 12, color: '#555', marginBottom: 5, height: 32 },
  precoCardHorizontal: { fontSize: 14, fontWeight: 'bold', color: '#111' },
  parcelaCardHorizontal: { fontSize: 10, color: '#777' },

  /* Categorias  */
  carrosselCategorias: { paddingLeft: 10, marginBottom: 20 },
  iconeCarrossel: { alignItems: 'center', marginRight: 15, width: 70 },
  circuloAzul: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#0033cc', marginBottom: 5, justifyContent: 'center', alignItems: 'center', elevation: 3 },
  emojiCarrossel: { fontSize: 24 },
  textoIcone: { fontSize: 12, color: '#333', textAlign: 'center', fontWeight: '500' },

  /* Banner Oferta */
  bannerOfertaDia: { width: 260, height: 100, borderRadius: 8, marginRight: 10, padding: 15, justifyContent: 'center', elevation: 2 },
  textoBannerOfertaAmarelo: { color: '#ffcc00', fontSize: 26, fontWeight: 'bold' },
  textoRosaPequeno: { color: '#ff0080', fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
  textoRosaGrande: { color: '#ff0080', fontSize: 22, fontWeight: 'bold' },
});