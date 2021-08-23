import { useContext } from 'react';
import { Center, Container, Flex } from '@chakra-ui/react';

import Info from './Info';
import Answer from './Answer';
import Progress from './Progress';
import Question from './Question';
import UserInput from './UserInput';
import Score from './Score';
import { TossupContext } from '../../services/TossupContext';
import { Mode, ModeContext } from '../../services/ModeContext';

type TossupReaderProps = {};

const TossupReader: React.FC<TossupReaderProps> = () => {
  const { mode } = useContext(ModeContext);
  const {
    tossup: { text, answer, category, difficulty, tournament },
  } = useContext(TossupContext);

  const shouldShowInfo = mode !== Mode.start && mode !== Mode.fetchingTossup;
  const shouldShowAnswer = mode === Mode.revealed;
  const shouldShowProgress = mode === Mode.answering;
  const shouldShowQuestion = mode !== Mode.start;
  const shouldShowScore = mode !== Mode.start;

  return (
    <Container maxW="3xl">
      <Flex direction="column" w="100%">
        {shouldShowInfo && (
          <Info
            category={category}
            difficulty={difficulty}
            tournament={tournament}
          />
        )}
        {shouldShowAnswer && <Answer answer={answer} />}
        {shouldShowQuestion && <Question text={text} />}
        {shouldShowProgress && <Progress />}
        <Center>
          <UserInput />
        </Center>
        {shouldShowScore && <Score />}
      </Flex>
    </Container>
  );
};

export default TossupReader;
