import React from 'react';

import Background from '../../components/Background';
import PromotionCard from '../../components/PromotionCard';

import {
  Container,
  SearchView,
  SearchInput,
  ShopIcon,
  PromotionView,
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
          contentContainerStyle={350}
          showsHorizontalScrollIndicator={false}>
          <PromotionCard background="#2A0248" />
          <PromotionCard background="#2A0248" />
          <PromotionCard background="#2A0248" />
        </PromotionView>
      </Container>
    </>
  );
};

export default Home;
