import React from 'react';

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

const List = () => {
  return (
    <>
      <Container>
        <HeaderView>
          <HeaderIcon>
            <Image style={{resizeMode: 'contain'}} source={Back} />
          </HeaderIcon>
          <SearchInput placeholder="Buscar no Mercado Livre" />
          <HeaderIcon>
            <Image style={{resizeMode: 'contain'}} source={Search} />
          </HeaderIcon>
        </HeaderView>
        <ListFilter itens="72" />
        <ListView>
          <ListCard title="Teste 1" />
          <ListCard title="Teste 2" />
          <ListCard title="Teste 3" />
          <ListCard title="Teste 4" />          
          <ListCard title="Teste 5" />          
          <ListCard title="Teste 6" />
        </ListView>
      </Container>
    </>
  );
};

export default List;
