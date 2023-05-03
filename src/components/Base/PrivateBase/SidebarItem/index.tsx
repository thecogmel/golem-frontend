import React from 'react';

import { IconType } from 'react-icons';
import { useLocation } from 'react-router-dom';

import { Icon, Text } from '@chakra-ui/react';

import { Container } from './styles';

interface ISideBarItem {
  index: number;
  name: string;
  route: string;
  icon: IconType;
}

const SideBarItem: React.FC<ISideBarItem> = ({
  icon: IconProps,
  index,
  name,
  route,
}) => {
  const location = useLocation();

  const itemIsSelected = location.pathname
    .split('/')[1]
    .includes(route.split('/')[1]);

  return (
    <Container selected={itemIsSelected} index={index} to={route}>
      {itemIsSelected ? (
        <>
          <Icon as={IconProps} size={14} mr={4} color={'MenuText'} />
          <Text fontSize={'lg'} as="b" color={'MenuText'}>
            {name}
          </Text>
        </>
      ) : (
        <>
          <Icon as={IconProps} size={14} mr={4} color={'InactiveCaptionText'} />
          <Text fontSize={'lg'} as="p" color={'InactiveCaptionText'}>
            {name}
          </Text>
        </>
      )}
    </Container>
  );
};

export default SideBarItem;
