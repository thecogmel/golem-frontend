import styled, { keyframes } from 'styled-components';

import { Stack } from '@chakra-ui/react';

export const LandingPage = styled(Stack)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  //background: #1a202c;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pulse = keyframes`  
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

export const LandingPageIcon = styled.img`
  width: 30%;
  animation: ${Pulse} 2s ease-out infinite;
`;
