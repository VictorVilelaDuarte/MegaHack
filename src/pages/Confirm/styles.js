import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  height: 100%;
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

export const ViewDetailsIcon = styled.View`
  /* padding: 10px; */
  flex-direction: row;
  justify-content: space-around;
`;

export const ServiceDescriptionDetail = styled.Text`
  font-size: 18px;
  color: #4e4e4e;
`;

export const ServiceDescription = styled.Text`
  font-size: 24px;
  margin-bottom: 15px;
  color: #4e4e4e;
`;

export const IconView = styled.View`
  width: 15%;
  align-items: center;
  justify-content: center;
`;

export const DetailImageView = styled.View`
  width: 45px;
  margin-left: 90px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  /* width: 15%; */
  height: 40px;
  width: 40px;
`;

export const DetailImage = styled.Image`
  /* width: 15%; */
  height: 25px;
  /* width: 20px;  */
`;

export const ViewDetailsLabel = styled.View`
  width: 70%;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  height: 50px;
  width: 275px;
  border-radius: 10px;
  background: #3983f3;
  margin: 5px;
  align-items: center;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
`;
