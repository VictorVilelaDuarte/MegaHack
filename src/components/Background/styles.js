import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  background: #e5e5e5;
  flex: 1;
`;

export const Top = styled(LinearGradient).attrs({
  colors: ['#FDDC13', '#E5E5E5'],
})`
  height: 300px;
`;
