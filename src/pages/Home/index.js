import React from 'react';

import Background from '../../components/Background';
import PromotionCard from '../../components/PromotionCard';
import InitialOptions from '../../components/InitialOptions';

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
        <PromotionView horizontal showsHorizontalScrollIndicator={false}>
          <PromotionCard background="#2A0248" />
          <PromotionCard background="#2A0248" />
          <PromotionCard background="#2A0248" />
        </PromotionView>
        <OptionsView>
          <InitialOptions text="Pagar com QR code" />
          <InitialOptions text="Ofertas" />
          <InitialOptions text="Mercado" />
          <InitialOptions text="Serviços Online" />
          <InitialOptions text="Ver mais" />
        </OptionsView>
      </Container>
    </>
  );
};

export default Home;
