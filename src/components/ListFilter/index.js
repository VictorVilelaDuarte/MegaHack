import React from 'react';
import {StyleSheet} from 'react-native';

import BlueArrow from '../../assets/blueArrow.png';

import {Container, Itens, Filter, ItensView, FilterView, Arrow} from './styles';

const ListFilter = ({itens}) => {
  const styles = StyleSheet.create({
    filter: {
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
    <Container style={styles.filter}>
      <ItensView>
        <Itens>{itens} resultados</Itens>
      </ItensView>
      <FilterView>
        <Filter>Filtrar</Filter>
        <Arrow source={BlueArrow} />
      </FilterView>
    </Container>
  );
};

export default ListFilter;
