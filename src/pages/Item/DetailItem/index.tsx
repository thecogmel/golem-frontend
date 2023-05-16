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

const DetailItem: React.FC = () => {
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
                onClick={() => navigate(RoutesPath.private.materials.path)}
              >
                Materiais
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                onClick={() => navigate(RoutesPath.private.createMaterial.path)}
              >
                Detalhes de um material
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Detalhes de um material</Heading>
        </Stack>
        <Stack alignSelf={'end'} direction={'row'}>
          <Button colorScheme="red" onClick={onOpen}>
            Deletar Material
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
                  Deletar material
                </AlertDialogHeader>

                <AlertDialogBody>
                  Tem certeza que deseja excluir esse material? Essa ação não
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
              Material teste
            </Heading>
            <HStack>
              <Text as="b">Origem:</Text>
              <Text>UFRN</Text>
            </HStack>
            <HStack>
              <Text as="b">Quantidade:</Text>
              <Text>21 itens</Text>
            </HStack>
            <HStack>
              <Text as="b">Categoria:</Text>
              <Text>Catergoria 1</Text>
            </HStack>
          </CardBody>
        </Card>
      </Stack>
    </Container>
  );
};

export default DetailItem;
