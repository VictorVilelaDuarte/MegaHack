import React from 'react';
import {StyleSheet} from 'react-native';

import Sevice from '../../assets/serviceImage.png';
import Close from '../../assets/close.png';

import {
  Container,
  Card,
  TitleView,
  Title,
  ImageView,
  ProductImage,
  DetailView,
  Detail,
  IconView,
  Icon,
  Button,
  ButtonText,
} from './styles';

const Modal = ({detail}) => {
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
    <Container>
      <IconView>
        <Icon style={{resizeMode: 'contain'}} source={Close} />
      </IconView>
      <Card style={styles.card}>
        <TitleView>
          <Title>Serviço contrado</Title>
        </TitleView>
        <ImageView>
          <ProductImage style={{resizeMode: 'contain'}} source={Sevice} />
        </ImageView>
        <DetailView>
          <Detail>{ detail }</Detail>
        </DetailView>
        <Button>
          <ButtonText>Entendi!</ButtonText>
        </Button>
      </Card>
    </Container>
  );
};

export default Modal;
