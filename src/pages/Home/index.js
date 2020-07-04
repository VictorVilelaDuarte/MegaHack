import React from 'react';

import Background from '../../components/Background';
import PromotionCard from '../../components/PromotionCard';
import InitialOptions from '../../components/InitialOptions';
import Card from '../../components/Card';

import {
  Container,
  SearchView,
  SearchInput,
  ShopIcon,
  PromotionView,
  OptionsView,
} from './styles';

const Home = () => {
  return (
    <>
      <Background />
      <Container>
        <SearchView>
          <ShopIcon />
          <SearchInput placeholder="Buscar no Mercado Livre" />
          <ShopIcon />
        </SearchView>
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
