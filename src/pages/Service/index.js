import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import ServiceImage from '../../components/ServiceImage';
import Modal from '../../components/Modal';
import Back from '../../assets/back.png';
import Search from '../../assets/search.png';
import Sevice from '../../assets/serviceImage.png';

import {
  Container,
  HeaderView,
  HeaderIcon,
  Image,
  HeaderTitle,
  ImageService,
  ViewDetails,
  ServiceDescription,
} from './styles';

const Service = ({navigation}) => {
  const [show, setShow] = useState(true);

  function toogle() {
    setShow(!show);
  }

  return (
    <>
      {show ? (
        <Modal
          detail="O serviço foi contratado com sucesso"
          toogle={() => toogle()}
        />
      ) : (
        <Container>
          <HeaderView>
            <HeaderIcon>
              <TouchableOpacity onPress={() => navigation.push('List')}>
                <Image style={{resizeMode: 'contain'}} source={Back} />
              </TouchableOpacity>
            </HeaderIcon>
            <HeaderTitle>Serviços online</HeaderTitle>
            <HeaderIcon>
              <Image style={{resizeMode: 'contain'}} source={Search} />
            </HeaderIcon>
          </HeaderView>
          <ImageService source={Sevice} />
          <ViewDetails>
            <ServiceDescription>
              Orientação psicológica - Doutora Ana Paula (lorem ipsum dolor)
            </ServiceDescription>
            <ServiceDescription>R$250,00</ServiceDescription>
          </ViewDetails>
          <ViewDetails>
            <ServiceDescription>
              Orientação psicológica - Doutora Ana Paula (lorem ipsum dolor)
            </ServiceDescription>
            <ServiceDescription>R$250,00</ServiceDescription>
          </ViewDetails>
        </Container>
      )}
    </>
  );
};

export default Service;
