import type { AnswerBase } from '../../types/types';
import { Typography } from '../../components';

import styles from './Results.module.css';

interface ResultsProps {
  selectedAnswers: AnswerBase[];
}

export const Results = ({ selectedAnswers }: ResultsProps) => {
  const correctCount = selectedAnswers.filter((ans) => ans.fields.isCorrect).length;
  const wrongCount = selectedAnswers.length - correctCount;

  return (
    <div className={styles.rPage}>
      <div className={styles.container}>
        <Typography variant='title' tag='h1'>
          Results
        </Typography>
        <div>
          <Typography variant='subtitle' tag='p'>
            Right: {correctCount}
          </Typography>
          <Typography variant='subtitle' tag='p'>
            Wrong: {wrongCount}
          </Typography>
        </div>
        <ul>
          {selectedAnswers.map((ans) => (
            <li key={ans.sys!.id}>
              {ans.fields.value} {ans.fields.isCorrect ? '✔️' : '❌'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
