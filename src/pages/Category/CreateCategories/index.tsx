import React from 'react';

import { FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import RoutesPath from 'router/routes';
import { errors } from 'utils';
import * as yup from 'yup';

import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';

const CreateCategory: React.FC = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(errors.required),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxW="full" p={14}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Stack>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => navigate(RoutesPath.private.categories.path)}
              >
                Categorias
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                onClick={() => navigate(RoutesPath.private.createCategory.path)}
              >
                Criar categorias
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Categorias</Heading>
        </Stack>
      </Stack>
      <Stack mt={6}>
        <Card>
          <CardHeader>
            <Heading borderBottom={'2px'} borderColor={'orange.200'} size="md">
              Cadastrar categoria
            </Heading>
          </CardHeader>
          <FormikProvider value={formik}>
            <CardBody>
              <VStack spacing={4} align="flex-start">
                <FormControl
                  isRequired
                  isInvalid={!!formik.errors.name && formik.touched.name}
                >
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <Input
                    name="name"
                    placeholder="Nome do categoria. Máx (144 caracteres)"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    maxLength={144}
                  />

                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
              </VStack>
            </CardBody>
            <CardFooter justifyContent={'flex-end'}>
              <Button
                type="submit"
                onClick={() => formik.handleSubmit()}
                minWidth={300}
              >
                Salvar
              </Button>
            </CardFooter>
          </FormikProvider>
        </Card>
      </Stack>
    </Container>
  );
};

export default CreateCategory;
