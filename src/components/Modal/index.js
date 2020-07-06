import React from 'react';
import {StyleSheet} from 'react-native';

import Sevice from '../../assets/serviceImage.png';
import Close from '../../assets/close.png';
import Check from '../../assets/check.png';

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

const Modal = ({detail, toogle}) => {
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
      <Card style={styles.card}>
        <ImageView>
          <ProductImage style={{resizeMode: 'contain'}} source={Check} />
        </ImageView>
        <DetailView>
          <Detail>{detail}</Detail>
        </DetailView>
        <Button onPress={() => toogle(1)}>
          <ButtonText>Entendi!</ButtonText>
        </Button>
      </Card>
    </Container>
  );
};

export default Modal;
