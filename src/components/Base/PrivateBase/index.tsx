import React, { useMemo } from 'react';

import { Center, Divider, Image, Stack, VStack } from '@chakra-ui/react';

import SideBarItem from './SidebarItem';
import sideBarOptions from './sideBarOptions';

interface Props {
  children?: React.ReactNode;
}

const PrivateBase: React.FC<Props> = ({ children }) => {
  const menuItems: Array<IMenuItem> = useMemo(() => sideBarOptions(), []);
  return (
    <Stack direction={'row'}>
      <VStack
        minHeight={'100vh'}
        boxSizing="border-box"
        width={250}
        p={4}
        borderRightColor={'InactiveBorder'}
        borderRightWidth={1}
      >
        <Image
          borderRadius="full"
          boxSize="125px"
          src="/images/Group.svg"
          alt="Golem Logo"
          mb={4}
          bg={'orange.500'}
          fallbackSrc="https://via.placeholder.com/125"
        />
        <Divider />

        <Center flexDirection={'column'}>
          {menuItems.map(({ name, route, icon }, index) => (
            <SideBarItem
              key={name}
              index={index}
              icon={icon}
              name={name}
              route={route}
            />
          ))}
        </Center>
      </VStack>
      <VStack w={'full'}>{children}</VStack>
    </Stack>
  );
};

export default PrivateBase;
