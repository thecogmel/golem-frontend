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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react';

const CreateItem: React.FC = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    origin: '',
    category: '',
    quantity: 0,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(errors.required),
    origin: yup.string().required(errors.required),
    category: yup.string().required(errors.required),
    quantity: yup.number().min(1, errors.minValue(0)).required(errors.required),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate(RoutesPath.private.materials.path);
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
                onClick={() => navigate(RoutesPath.private.materials.path)}
              >
                Materiais
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                onClick={() => navigate(RoutesPath.private.createMaterial.path)}
              >
                Criar materiais
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Materiais</Heading>
        </Stack>
      </Stack>
      <Stack mt={6}>
        <Card>
          <CardHeader>
            <Heading borderBottom={'2px'} borderColor={'orange.200'} size="md">
              Cadastrar material
            </Heading>
          </CardHeader>
          <FormikProvider value={formik}>
            <CardBody>
              <VStack>
                <SimpleGrid w={'full'} columns={{ sm: 1, md: 2 }} spacing={2}>
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
                  <FormControl
                    isRequired
                    isInvalid={!!formik.errors.origin && formik.touched.origin}
                  >
                    <FormLabel htmlFor="origin">Origem</FormLabel>
                    <Input
                      name="origin"
                      placeholder="Origem do produto"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.origin}
                      maxLength={144}
                    />

                    <FormErrorMessage>{formik.errors.origin}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      !!formik.errors.quantity && formik.touched.quantity
                    }
                  >
                    <FormLabel htmlFor="quantity">Quantidade</FormLabel>
                    <NumberInput defaultValue={0} min={0}>
                      <NumberInputField
                        name="quantity"
                        placeholder="Quantidade"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.quantity}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>

                    <FormErrorMessage>
                      {formik.errors.quantity}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      !!formik.errors.category && formik.touched.category
                    }
                  >
                    <FormLabel htmlFor="category">Categoria</FormLabel>

                    <Select
                      name="category"
                      placeholder="Categoria do produto"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.category}
                    >
                      <option value="option1">Categoria 1</option>
                      <option value="option2">Categoria 2</option>
                      <option value="option3">Categoria 3</option>
                    </Select>

                    <FormErrorMessage>
                      {formik.errors.category}
                    </FormErrorMessage>
                  </FormControl>
                </SimpleGrid>
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

export default CreateItem;
