import React, { useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import RoutesPath from 'router/routes';

import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const DetailCategory: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = useRef(null);

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
                Detalhes de uma categoria
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Detalhes de uma categoria</Heading>
        </Stack>
        <Stack alignSelf={'end'} direction={'row'}>
          <Button colorScheme="red" onClick={onOpen}>
            Deletar Categoria
          </Button>
          <Button>Editar informações</Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Deletar categoria
                </AlertDialogHeader>

                <AlertDialogBody>
                  Tem certeza que deseja excluir essa categoria? Essa ação não
                  pode ser desfeita.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button
                    ref={cancelRef}
                    onClick={onClose}
                    colorScheme="whiteAlpha"
                  >
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={onClose} ml={3}>
                    Deletar
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Stack>
      </Stack>
      <Stack mt={6}>
        <Card>
          <CardBody>
            <Heading size={'lg'} mb={2}>
              Categoria teste
            </Heading>
            <HStack>
              <Text>Status:</Text>
              <Badge ml="1" fontSize="0.8em" colorScheme="green">
                Ativo
              </Badge>
            </HStack>
          </CardBody>
        </Card>
      </Stack>
    </Container>
  );
};

export default DetailCategory;
