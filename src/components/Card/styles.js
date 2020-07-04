import styled from 'styled-components/native';

export const Container = styled.View`
  height: 500px;
  width: 350px;
  border-radius: 10px;
  background: #fff;
  margin-top: 5px;
  margin-bottom: 10px;
  align-items: center;
`;

export const TitleView = styled.View`
  width: 100%;
  height: 60px;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #e2e2e2;
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const DetailView = styled.View`
  width: 100%;
  padding: 10px;
`;

export const Detail = styled.Text`
  font-size: 14px;
`;

export const ImageView = styled.View`
  width: 85%;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 250px;
`;
