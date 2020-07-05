import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: flex-start;
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
  margin-top: 30px;
  margin-left: 30px;
  align-items: center;
`;

export const TitleView = styled.View`
  width: 100%;
  height: 60px;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #e2e2e2;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const DetailView = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const Detail = styled.Text`
  font-size: 14px;
`;

export const ImageView = styled.View`
  width: 95%;
  margin-bottom: 10px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const Button = styled.View`
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
