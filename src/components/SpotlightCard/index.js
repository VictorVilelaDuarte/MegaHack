import React from 'react';

import {TouchableOpacity} from 'react-native';
import {Container, Image} from './styles';

const SpotlightCard = ({navigation, image}) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.push('List')}>
        <Image style={{resizeMode: 'contain'}} source={image} />
      </TouchableOpacity>
    </Container>
  );
};

export default SpotlightCard;
