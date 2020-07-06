import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';

import SpotlightCard from '../../components/SpotlightCard';
import CategoryCard from '../../components/CategoryCard';
import Banner from '../../components/Banner';

import Back from '../../assets/back.png';
import Search from '../../assets/search.png';
import BannerImage from '../../assets/bannerImage.png';
import SpotlightImage from '../../assets/spotlightImage.png';
import Classes from '../../assets/classes.png';
import Consulting from '../../assets/consulting.png';
import Decoration from '../../assets/decoration.png';
import WebDesign from '../../assets/webDesign.png';

import {
  Container,
  HeaderView,
  HeaderIcon,
  Image,
  HeaderTitle,
  ListView,
} from './styles';

const Categories = ({navigation}) => {
  return (
    <>
      <Container>
        <HeaderView>
          <HeaderIcon>
            <TouchableOpacity onPress={() => navigation.push('Home')}>
              <Image style={{resizeMode: 'contain'}} source={Back} />
            </TouchableOpacity>
          </HeaderIcon>
          <HeaderTitle>Serviços online</HeaderTitle>
          <HeaderIcon>
            <Image style={{resizeMode: 'contain'}} source={Search} />
          </HeaderIcon>
        </HeaderView>
        <Banner image={BannerImage} />
        <SpotlightCard navigation={navigation} image={SpotlightImage} />
        <ListView>
          <CategoryCard title="Obras e decoração" image={Decoration} />
          <CategoryCard title="Web design" image={WebDesign} />
          <CategoryCard title="Aulas online" image={Classes} />
          <CategoryCard title="Consultoria empresarial" image={Consulting} />
        </ListView>
      </Container>
    </>
  );
};

export default Categories;
