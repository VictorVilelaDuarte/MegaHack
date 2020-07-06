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

export const ImageService = styled.Image`
  margin-top: -4px;
  height: 230px;
  width: 100%;
`;

export const ViewDetails = styled.View`
  padding: 10px;
  border-bottom-color: #e2e2e2;
  border-bottom-width: 1px;
`;

export const ServiceDescription = styled.Text`
  font-size: 24px;
  margin-bottom: 15px;
  color: #4e4e4e;
`;
