import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Container, Title, TitleView, Image} from './styles';

const CategoryCard = ({image}) => {
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
      <ImageBackground source={image} style={{width: 165, height: 200}} />
    </Container>
  );
};

export default CategoryCard;
