import React from 'react';

import ServiceImage from '../../components/ServiceImage';
import Modal from '../../components/Modal';
import Back from '../../assets/back.png';
import Search from '../../assets/search.png';
import Sevice from '../../assets/serviceImage.png';

import {Container, HeaderView, HeaderIcon, Image, HeaderTitle} from './styles';

const Service = () => {
  return (
    <>
      <Modal detail="Consulta com Psicóloga" />
      <Container>
        <HeaderView>
          <HeaderIcon>
            <Image style={{resizeMode: 'contain'}} source={Back} />
          </HeaderIcon>
          <HeaderTitle>Serviços online</HeaderTitle>
          <HeaderIcon>
            <Image style={{resizeMode: 'contain'}} source={Search} />
          </HeaderIcon>
        </HeaderView>
        <ServiceImage image={Sevice} />
      </Container>
    </>
  );
};

export default Service;
