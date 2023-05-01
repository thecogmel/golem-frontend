import styled from 'styled-components';

export const Logo = styled.img`
  width: min(70%, 150px);
  border-radius: 12%;
  animation: show-rightwards 1s ease-out, fade-in 1s ease-out;
  animation: float 5s ease-in-out infinite;
`;

export const BackgroundContainer = styled.div`
  background-color: red;
`;
