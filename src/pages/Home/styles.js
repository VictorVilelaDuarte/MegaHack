import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const SearchView = styled.View`
  top: 15px;
  height: 40px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#888',
})`
  width: 70%;
  background: #fff;
  border-radius: 65px;
`;

export const ShopIcon = styled.View`
  width: 10%;
  height: 100%;
  border: 1px solid red;
`;

export const PromotionView = styled.ScrollView`
  margin-top: 50px;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  /* align-items: center; */
`;
