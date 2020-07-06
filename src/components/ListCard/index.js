import React from 'react';


import ListImage from '../../assets/listImage.png';
import Heart from '../../assets/blueHeart.png';

import {
  Container,
  DetailView,
  ImageView,
  IconView,
  Title,
  Price,
  Installments,
  Deadline,
  Image,
  Icon,
} from './styles';

const ListCard = () => {
  return (
    <Container>
      <ImageView>
        <Image style={{resizeMode: 'contain'}} source={ListImage} />
      </ImageView>
      <DetailView>
        <Title>Orientação psicológica - Doutora Ana Paula (lorem ipsum dolor)</Title>
        <Price>R$250,00</Price>
        <Installments>10x R$25,00 sem juros</Installments>
        <Deadline>Disponivel 5 dias úteis</Deadline>
      </DetailView>
      <IconView>
        <Icon style={{resizeMode: 'contain'}} source={Heart} />
      </IconView>
    </Container>
  );
};

export default ListCard;
