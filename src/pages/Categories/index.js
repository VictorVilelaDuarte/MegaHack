import React from 'react';

import SpotlightCard from '../../components/SpotlightCard';
import CategoryCard from '../../components/CategoryCard';
import Banner from '../../components/Banner';
import Back from '../../assets/back.png';
import Search from '../../assets/search.png';
import BannerImage from '../../assets/bannerImage.png';
import SpotlightImage from '../../assets/spotlightImage.png';

import {
  Container,
  HeaderView,
  HeaderIcon,
  Image,
  HeaderTitle,
  ListView,
} from './styles';

const Categories = () => {
  return (
    <>
      <Container>
        <HeaderView>
          <HeaderIcon>
            <Image style={{resizeMode: 'contain'}} source={Back} />
          </HeaderIcon>
          <HeaderTitle>Serviços online</HeaderTitle>
          <HeaderIcon>
            <Image style={{resizeMode: 'contain'}} source={Search} />
          </HeaderIcon>
        </HeaderView>
        <Banner image={BannerImage} />
        <SpotlightCard image={SpotlightImage} />
        <ListView>
          <CategoryCard title="Obras e decoração" />
          <CategoryCard title="Web design" />
          <CategoryCard title="Aulas online" />
          <CategoryCard title="Consultoria empresarial" />
        </ListView>
      </Container>
    </>
  );
};

export default Categories;
