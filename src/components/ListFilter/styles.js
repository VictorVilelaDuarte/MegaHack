import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5%;
  height: 65px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  background: #fff;
  height: 50px;
`;

export const ItensView = styled.View`
  width: 100%;
  height: 100px;
  flex: 1;
`;

export const FilterView = styled.View`
  width: 100%;
  height: 20px;
  flex: 0.2;
  flex-direction: row;
`;

export const Itens = styled.Text`
  align-items: center;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

export const Filter = styled.Text`
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  text-align: left;
  font-style: normal;
  color: #3983f3;
`;

export const Arrow = styled.Image`
  width: 20px;
  height: 15px;
`;
