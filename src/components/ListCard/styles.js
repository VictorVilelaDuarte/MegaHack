import styled from 'styled-components/native';

export const Container = styled.View`
  height: 140px;
  width: 410px;
  margin-top: 2px;
  background: #fff;
  align-items: center;
  flex-direction: row;
`;

export const DetailView = styled.View`
  width: 150px;
  flex: 2;
`;

export const ImageView = styled.View`
  padding: 5px;
  height: 120px;
  width: 130px;
  flex: 1;
`;

export const IconView = styled.View`
  padding-bottom: 90px;
  width: 90px;
  flex: 1;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: left;
  margin: 2px;
`;

export const Price = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: left;
  margin: 2px;
`;

export const Installments = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: left;
  color: #3983f3;
  margin: 2px;
`;

export const Deadline = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: left;
  color: #3983f3;
  margin: 2px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Icon = styled.Image`
  width: 100%;
  height: 25px;
`;
