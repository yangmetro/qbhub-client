import { Container, Text } from '@chakra-ui/react';

type QuestionProps = {
  text: string;
};

const Question: React.FC<QuestionProps> = ({ text }) => {
  return (
    <Container
      maxW="container.md"
      bg="gray.100"
      w="100%"
      mb={4}
      p={4}
      borderRadius="md"
    >
      <Text pl={2} pr={2}>
        {text}
      </Text>
    </Container>
  );
};

export default Question;
