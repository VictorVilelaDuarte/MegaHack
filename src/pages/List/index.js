import React from 'react';
import {TouchableOpacity} from 'react-native';

import ListFilter from '../../components/ListFilter';
import ListCard from '../../components/ListCard';

import {
  Container,
  HeaderView,
  HeaderIcon,
  SearchInput,
  Image,
  ListView,
} from './styles';

import Back from '../../assets/back.png';
import Search from '../../assets/search.png';

const List = ({navigation}) => {
  return (
    <>
      <Container>
        <HeaderView>
          <HeaderIcon>
            <TouchableOpacity onPress={() => navigation.push('Categories')}>
              <Image style={{resizeMode: 'contain'}} source={Back} />
            </TouchableOpacity>
          </HeaderIcon>
          <SearchInput placeholder="Buscar no Mercado Livre" />
          <HeaderIcon>
            <Image style={{resizeMode: 'contain'}} source={Search} />
          </HeaderIcon>
        </HeaderView>
        <ListFilter itens="72" />
        <ListView>
          <TouchableOpacity onPress={() => navigation.push('Service')}>
            <ListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Service')}>
            <ListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Service')}>
            <ListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Service')}>
            <ListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Service')}>
            <ListCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Service')}>
            <ListCard />
          </TouchableOpacity>
        </ListView>
      </Container>
    </>
  );
};

export default List;
