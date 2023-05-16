import React from 'react';

import { useNavigate } from 'react-router-dom';
import RoutesPath from 'router/routes';

import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const ListItems: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container maxW="full" p={14}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Stack>
          <Heading>Materiais</Heading>
          <Text>Aqui estão todas os materiais cadastrados no sistema</Text>
        </Stack>
        <Stack>
          <Button
            size="lg"
            onClick={() => navigate(RoutesPath.private.createMaterial.path)}
          >
            Cadastrar material
          </Button>
        </Stack>
      </Stack>
      <Stack mt={6}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="search" placeholder="Busca" />
        </InputGroup>
      </Stack>

      <TableContainer mt={6}>
        <Table colorScheme="gray" variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Origem</Th>
              <Th>Categoria</Th>
              <Th isNumeric>Quantidade</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              onClick={() => navigate(RoutesPath.private.detailMaterial.path)}
              cursor={'pointer'}
              _hover={{ bg: 'rgba(0,0,0,0.075)' }}
            >
              <Td>Item teste</Td>
              <Td>UFRN</Td>
              <Td>Categoria teste</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr
              onClick={() => navigate(RoutesPath.private.detailMaterial.path)}
              cursor={'pointer'}
              _hover={{ bg: 'rgba(0,0,0,0.075)' }}
            >
              <Td>Item teste</Td>
              <Td>UFRN</Td>
              <Td>Categoria teste</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr
              onClick={() => navigate(RoutesPath.private.detailMaterial.path)}
              cursor={'pointer'}
              _hover={{ bg: 'rgba(0,0,0,0.075)' }}
            >
              <Td>Item teste</Td>
              <Td>UFRN</Td>
              <Td>Categoria teste</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Nome</Th>
              <Th>Origem</Th>
              <Th>Categoria</Th>
              <Th isNumeric>Quantidade</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListItems;
