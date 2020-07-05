import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  height: 180px;
  width: 350px;
  border-radius: 10px;
  margin-left: 6px;
  margin-right: 6px;

  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
`;

export const Image = styled.Image`
  margin-top: 6%;
  width: 100%;
  height: 130px;
`;
