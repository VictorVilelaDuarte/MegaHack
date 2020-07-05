import React from 'react';
import {View} from 'react-native';

import {Container, TitleView, Title} from './styles';

const ListCard = ({title}) => {
  return (
    <Container>
      <TitleView>
        <Title>{title}</Title>
      </TitleView>
    </Container>
  );
};

export default ListCard;
