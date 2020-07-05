import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Title, TitleView} from './styles';

const CategoryCard = ({title}) => {
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
        <Title>{title}</Title>
      </TitleView>
    </Container>
  );
};

export default CategoryCard;
