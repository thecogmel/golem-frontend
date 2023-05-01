import React, { useState } from 'react';

import { useMutation } from 'react-query';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
} from '@chakra-ui/react';

import { useAuth } from '../../contexts/Auth';

const Login: React.FC = () => {
  const { login } = useAuth();
  const toast = useToast();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onLoginFormSubmit = useMutation(
    async ({ email, password }: ILogin) => {
      return await login(email, password);
    },
    {
      onError: () => {
        toast({
          title: 'Erro ao realizar login',
          description: 'Verifique suas credenciais e tente novamente',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      },
      onSuccess: () => {},
    }
  );

  return (
    <Flex
      height={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'row'}
    >
      <Stack flex={1} bg={`red`}>
        <Image h={'100vh'} src="/images/login.jpg" objectFit="cover" />
      </Stack>
      <Stack flex={2}>
        <Container>
          <Center>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
            >
              <Stack>
                <CardBody alignItems={'center'}>
                  <Center>
                    <Image
                      rounded="full"
                      boxSize="150px"
                      src="/images/Group.svg"
                      alt="Logo"
                      bg={'orange.500'}
                    />
                  </Center>

                  <FormControl mb={8} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="******"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </CardBody>

                <CardFooter>
                  <Button
                    w={'100%'}
                    variant="solid"
                    onClick={() =>
                      onLoginFormSubmit.mutate({
                        email: 'super@user.com',
                        password: 'password',
                      })
                    }
                  >
                    Login
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </Center>
        </Container>
      </Stack>
    </Flex>
  );
};

export default Login;
