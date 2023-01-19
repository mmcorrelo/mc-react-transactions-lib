import React from 'react';
import styles from './ChartSkeleton.module.css';

export default function({height}: any) {
  return (
    <div className={styles['loading-chart-skeleton']} style={{height: height}}>
      <div className={styles['loading-chart-skeleton-title']}>
        <div className={styles['loading-chart-skeleton-title-line']} style={{width: '30%', height: '24px'}}></div>
        <div className={styles['loading-chart-skeleton-title-line']} style={{width: '50%'}}></div>
      </div>
      <div className={styles['loading-chart-skeleton-content']}>
        <div className={styles['loading-chart-skeleton-content-line']} style={{height: '30px'}}></div>
        <div className={styles['loading-chart-skeleton-content-line']} style={{height: '60px'}}></div>
        <div className={styles['loading-chart-skeleton-content-line']} style={{height: '70px'}}></div>
        <div className={styles['loading-chart-skeleton-content-line']} style={{height: '130px'}}></div>
        <div className={styles['loading-chart-skeleton-content-line']} style={{height: '20px'}}></div>
      </div>
      <div className={styles['loading-chart-skeleton-title']}>
        <div className={styles['loading-chart-skeleton-title-line']} style={{width: '70%'}}></div>
      </div>
    </div>
  );
}

