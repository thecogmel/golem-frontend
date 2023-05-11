import {
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
  },
  withDefaultColorScheme({ colorScheme: 'teal' })
);

export default theme;
