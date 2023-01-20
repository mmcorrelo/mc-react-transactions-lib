import { Box } from '@mui/material';
import React from 'react';
import styles from './ErrorLoadingChart.module.css';

interface Props {
  width?: string;
  height?: string;
  message?: string;
}

export default function({ width, height, message }: Props) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4} width={width || 'auto'} height={height || 'auto'} className={`${styles.container}`}>
      <svg viewBox='0 0 100 100' className='w-100 h-100'>
        <rect x='10' y='10' width='80' height='80' rx='10' fill='#f5f4f4' />
        <path d='M30 30 L70 70' stroke='#e2e2e2' strokeWidth='4' />
        <path d='M70 30 L30 70' stroke='#e2e2e2' strokeWidth='4' />
      </svg>
      {message && <div className={styles.errorMessage}>{message}</div>}
    </Box>
  );
}