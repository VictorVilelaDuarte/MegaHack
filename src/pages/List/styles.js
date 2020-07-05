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

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#888',
})`
  padding-left: 20px;
  width: 70%;
  height: 35px;
  background: #fff;
  border-radius: 65px;
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

export const ListView = styled.ScrollView`
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;