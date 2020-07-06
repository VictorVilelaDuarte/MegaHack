import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import ServiceImage from '../../components/ServiceImage';
import Modal from '../../components/Modal';
import Back from '../../assets/back.png';
import Search from '../../assets/search.png';
import Sevice from '../../assets/serviceImage.png';
import Card from '../../assets/card.png';
import Day from '../../assets/day.png';
import Go from '../../assets/go.png';
import Disp from '../../assets/disp.png';
import Avaliation from '../../assets/avaliation.png';

import {
  Container,
  HeaderView,
  HeaderIcon,
  Image,
  HeaderTitle,
  ImageService,
  ViewDetails,
  ServiceDescription,
  ServiceDescriptionDetail,
  ViewDetailsIcon,
  Icon,
  IconView,
  ViewDetailsLabel,
  Button,
  ButtonText,
  DetailImage,
  DetailImageView,
} from './styles';

const Service = ({navigation}) => {
  const [show, setShow] = useState(false);

  function toogle(muda) {
    if (muda) {
      console.log('oi');
      navigation.push('Confirm');
    }
    setShow(!show);
  }

  return (
    <>
      {show ? (
        <Modal
          detail="O serviço foi contratado com sucesso"
          toogle={() => toogle(1)}
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
            <DetailImageView>
              <DetailImage
                style={{resizeMode: 'contain'}}
                source={Avaliation}
              />
            </DetailImageView>
            <ServiceDescription>R$250,00</ServiceDescription>
            <DetailImageView>
              <DetailImage style={{resizeMode: 'contain'}} source={Disp} />
            </DetailImageView>
          </ViewDetails>
          <ViewDetails>
            <ViewDetailsIcon>
              <IconView>
                <Icon source={Card} />
              </IconView>
              <ViewDetailsLabel>
                <ServiceDescriptionDetail>10x R$25,00</ServiceDescriptionDetail>
              </ViewDetailsLabel>
              <IconView>
                <Icon source={Go} />
              </IconView>
            </ViewDetailsIcon>
          </ViewDetails>
          <ViewDetails>
            <ViewDetailsIcon>
              <IconView>
                <Icon source={Day} />
              </IconView>
              <ViewDetailsLabel>
                <ServiceDescriptionDetail>
                  Datas disponíveis
                </ServiceDescriptionDetail>
              </ViewDetailsLabel>
              <IconView>
                <Icon source={Go} />
              </IconView>
            </ViewDetailsIcon>
          </ViewDetails>
          <Button onPress={() => toogle()}>
            <ButtonText>Entendi!</ButtonText>
          </Button>
        </Container>
      )}
    </>
  );
};

export default Service;
