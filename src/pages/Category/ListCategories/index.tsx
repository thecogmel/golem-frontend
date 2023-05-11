import React from 'react';

import { useNavigate } from 'react-router-dom';
import RoutesPath from 'router/routes';

import { SearchIcon } from '@chakra-ui/icons';
import {
  Badge,
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

const ListCategories: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container maxW="full" p={14}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Stack>
          <Heading>Categorias</Heading>
          <Text>Aqui estão todas as categorias cadastradas no sistema</Text>
        </Stack>
        <Stack>
          <Button
            size="lg"
            onClick={() => navigate(RoutesPath.private.createCategory.path)}
          >
            Cadastrar categoria
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
              <Th>Status</Th>
              <Th isNumeric>Ativo desde</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              onClick={() => navigate(RoutesPath.private.detailCategory.path)}
              cursor={'pointer'}
              _hover={{ bg: 'rgba(0,0,0,0.075)' }}
            >
              <Td>Categoria teste</Td>
              <Td>
                <Badge colorScheme="green">Aprovado</Badge>
              </Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>Ativo</Td>
              <Td>
                <Badge colorScheme="yellow">Pendente</Badge>
              </Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>
                <Badge colorScheme="red">Rejeitado</Badge>
              </Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListCategories;
