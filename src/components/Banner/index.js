import React from 'react';

import {Container, Image} from './styles';

const Banner = ({image}) => {
  return (
    <Container>
      <Image style={{resizeMode: 'contain'}} source={image} />
    </Container>
  );
};

export default Banner;
