import React from 'react';

import { Theme, useTheme } from '@chakra-ui/react';

import { LandingPage, LandingPageIcon } from './styles';

const SplashScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  console.log();
  return (
    <LandingPage bg={theme.colors.gray[800]}>
      <LandingPageIcon src="/images/Group.svg" alt="Logo" />
    </LandingPage>
  );
};

export default SplashScreen;
