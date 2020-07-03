import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Top = styled(LinearGradient).attrs({
  colors: ['#FDDC13', '#fff'],
})`
  height: 300px;
`;
