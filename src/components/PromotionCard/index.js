import React from 'react';

import {Container, Image} from './styles';

const PromotionCard = ({background, image}) => {
  return (
    <Container background={background}>
      <Image style={{resizeMode: 'contain'}} source={image} />
    </Container>
  );
};

export default PromotionCard;
