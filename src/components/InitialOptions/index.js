import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, Circle, Text, TextView} from './styles';

const InitialOptions = ({text}) => {
  const styles = StyleSheet.create({
    circle: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });
  return (
    <Container>
      <Circle style={styles.circle} />
      <TextView>
        <Text>{text}</Text>
      </TextView>
    </Container>
  );
};

export default InitialOptions;
