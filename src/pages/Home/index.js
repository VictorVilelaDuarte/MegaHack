import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';

import Background from '../../components/Background';
import PromotionCard from '../../components/PromotionCard';
import InitialOptions from '../../components/InitialOptions';
import Card from '../../components/Card';
import requestCameraAndAudioPermission from '../../components/permission';

import {
  Container,
  SearchView,
  SearchInput,
  ShopIcon,
  PromotionView,
  OptionsView,
} from './styles';

const Home = ({navigation}) => {
  if (Platform.OS === 'android') {
    requestCameraAndAudioPermission().then((_) => {
      console.log('requested!');
    });
  }
  return (
    <>
      <Background />
      <Container>
        <SearchView>
          <ShopIcon />
          <SearchInput placeholder="Buscar no Mercado Livre" />
          <ShopIcon />
        </SearchView>
        <TouchableOpacity
          style={{
            borderColor: `#000`,
            borderStyle: 'solid',
            borderWidth: 1,
            width: 40,
            height: 40,
          }}
          onPress={() => navigation.navigate('Video')}
        />
        <PromotionView
          horizontal
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}>
          <PromotionCard background="#91B39A" />
          <PromotionCard background="#2A0248" />
          <PromotionCard background="#FFAE66" />
        </PromotionView>
        <OptionsView>
          <InitialOptions text="Pagar com QR code" />
          <InitialOptions text="Ofertas" />
          <InitialOptions text="Mercado" />
          <InitialOptions text="Serviços Online" />
          <InitialOptions text="Ver mais" />
        </OptionsView>
        <Card />
      </Container>
    </>
  );
};

export default Home;
