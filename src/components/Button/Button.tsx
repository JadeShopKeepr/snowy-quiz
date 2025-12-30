import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonVariant = 'next' | 'previous' | 'submit';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({ variant, children, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
