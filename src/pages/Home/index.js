import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';

import Background from '../../components/Background';
import PromotionCard from '../../components/PromotionCard';
import InitialOptions from '../../components/InitialOptions';
import Card from '../../components/Card';
import requestCameraAndAudioPermission from '../../components/permission';

import Cart from '../../assets/shoppingCart.png';
import Market from '../../assets/market.png';
import Offers from '../../assets/offers.png';
import Plus from '../../assets/plus.png';
import Qrcode from '../../assets/qrcode.png';
import Services from '../../assets/services.png';
import Promo from '../../assets/imagePromo.png';
import Menu from '../../assets/sandwich.png';

import {
  Container,
  SearchView,
  SearchInput,
  ShopIcon,
  PromotionView,
  OptionsView,
  Image,
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
          <ShopIcon>
            <Image style={{resizeMode: 'contain'}} source={Menu} />
          </ShopIcon>
          <SearchInput placeholder="Buscar no Mercado Livre" />
          <ShopIcon>
            <Image style={{resizeMode: 'contain'}} source={Cart} />
          </ShopIcon>
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
          <PromotionCard background="#91B39A" image={Promo} />
          <PromotionCard background="#2A0248" image={Promo} />
          <PromotionCard background="#FFAE66" image={Promo} />
        </PromotionView>
        <OptionsView>
          <InitialOptions text="Serviços Online" image={Services} />
          <InitialOptions text="Pagar com QR code" image={Qrcode} />
          <InitialOptions text="Ofertas" image={Offers} />
          <InitialOptions text="Mercado" image={Market} />
          <InitialOptions text="Ver mais" image={Plus} />
        </OptionsView>
        <Card />
      </Container>
    </>
  );
};

export default Home;
