import React from 'react';
import clsx from 'clsx';
import { Typography } from '..';
import type { AnswerBase } from '../../types/types';

import styles from './AnswerCard.module.css';

interface AnswerCardProps<T extends AnswerBase> extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  answer: T;
  active?: boolean;
  variant?: 'default' | 'highlighted';
}

export const AnswerCard = <T extends AnswerBase>({
  answer,
  active = false,
  className,
  variant = 'default',
  ...props
}: AnswerCardProps<T>) => {
  const { value } = answer.fields;

  return (
    <button className={clsx(styles[variant], { [styles.highlighted]: active }, className)} {...props}>
      <Typography variant='text' tag='p'>
        {value}
      </Typography>
    </button>
  );
};
