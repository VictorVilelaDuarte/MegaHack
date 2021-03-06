import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  flex: 1;
`;

export const HeaderView = styled.View`
  padding-top: 5%;
  height: 65px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  background: #fddc13;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

export const HeaderIcon = styled.View`
  width: 10%;
  height: 100%;
`;

export const Image = styled.Image`
  margin-top: 10%;
  width: 100%;
  height: 25px;
`;

export const SpotlightView = styled.View`
  margin-top: 50px;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const ListView = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
