import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, Circle, Text, TextView, Image} from './styles';

const InitialOptions = ({text, image}) => {
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
      <Circle style={styles.circle}>
        <Image style={{resizeMode: 'contain'}} source={image} />
      </Circle>
      <TextView>
        <Text>{text}</Text>
      </TextView>
    </Container>
  );
};

export default InitialOptions;
