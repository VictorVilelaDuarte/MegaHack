import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Container,
  TitleView,
  Title,
  ImageView,
  ProductImage,
  Detail,
  DetailView,
} from './styles';

import Urus from '../../assets/urus.png';

const Card = () => {
  const styles = StyleSheet.create({
    card: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 5,
    },
  });

  return (
    <Container style={styles.card}>
      <TitleView>
        <Title>Visto recentemente</Title>
      </TitleView>
      <ImageView>
        <ProductImage style={{resizeMode: 'contain'}} source={Urus} />
      </ImageView>
      <DetailView>
        <Detail>Lamborghini Urus - 4.0 V8 turbo gasolina awd automático</Detail>
      </DetailView>
    </Container>
  );
};

export default Card;
