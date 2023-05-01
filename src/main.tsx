import React from 'react';

import { AxiosError } from 'axios';
import { ApiProvider } from 'contexts/Api';
import { AuthProvider } from 'contexts/Auth';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from 'router';

import { ChakraProvider } from '@chakra-ui/react';

import theme from './themes/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (count, error) => {
        const axiosError: AxiosError = error as AxiosError;
        if (axiosError.response?.status === 401 || count >= 3) {
          return false;
        }
        return true;
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ApiProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </ApiProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
