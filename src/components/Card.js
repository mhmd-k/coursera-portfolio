import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      bg="white"
      color="black"
      borderRadius={10}
      overflow={"hidden"}
      justifyContent="space-between"
    >
      <Image src={imageSrc} />
      <Heading alignSelf="start" padding={3}>
        {title}
      </Heading>
      <Text padding={3}>{description}</Text>
      <HStack spacing={0} alignSelf="start" fontWeight={800} fontSize="20px">
        <Text padding={3} cursor="pointer">
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" cursor="pointer" />
      </HStack>
    </VStack>
  );
};

export default Card;
