import React from 'react';
import { TButtonSize, TButtonType } from '../../../shared/interface/button';
import styles from './button.module.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: TButtonType;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What text color to use
   */
  textColor?: string;
  /**
   * How large should the button be?
   */
  size?: TButtonSize;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  size = 'medium',
  backgroundColor,
  textColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`${styles.button} ${styles[size]} ${styles[type]}`}
      style={{ backgroundColor, color: textColor }}
      {...props}
    >
      {label}
    </button>
  );
};
