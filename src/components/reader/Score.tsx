import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

type ScoreProps = {
  score: number;
  delta: number;
  showDelta: boolean;
};

const Score: React.FC<ScoreProps> = ({ score, delta, showDelta }) => {
  const renderScore = showDelta ? `${score - delta} → ${score}` : score;

  return (
    <Stat>
      <StatLabel fontSize="xl" textAlign="center">
        Score
      </StatLabel>
      <StatNumber textAlign="center">{renderScore}</StatNumber>
      {showDelta && (
        <StatHelpText textAlign="center">
          <StatArrow type={delta > 0 ? 'increase' : 'decrease'} />
          {Math.abs(delta)}
        </StatHelpText>
      )}
    </Stat>
  );
};

export default Score;
