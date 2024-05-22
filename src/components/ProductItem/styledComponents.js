import styled from "styled-components";

export const BackgroundImg = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  height: ${props => props.specialwidth ? '300px' : '181px'};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
