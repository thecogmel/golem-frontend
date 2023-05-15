import React from 'react';

import { Heading, Image, VStack } from '@chakra-ui/react';

const Dashboard: React.FC = () => {
  return (
    <VStack py={10}>
      <Heading mb={10} size="3xl">
        Em construção
      </Heading>
      <Image
        objectFit="cover"
        src="/images/under_construction.svg"
        alt="Em construção"
      />
    </VStack>
  );
};

export default Dashboard;
