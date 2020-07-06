import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  z-index: 999;
  background: #fddc13;
`;

export const IconView = styled.View`
  width: 10%;
  height: 30px;
  margin-left: 15px;
  margin-top: 15px;
`;

export const Icon = styled.Image`
  margin-top: 10%;
  width: 100%;
  height: 25px;
`;

export const Card = styled.View`
  height: 400px;
  width: 300px;
  border-radius: 10px;
  background: #fff;
  align-items: center;
`;

export const DetailView = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
  padding: 5px;
`;

export const Detail = styled.Text`
  font-size: 24px;
`;

export const ImageView = styled.View`
  width: 95%;
  margin-bottom: 10px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const Button = styled.TouchableOpacity`
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
