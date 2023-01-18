import React from 'react';
import styles from './ChartSkeleton.module.css';

export default function ErrorLoadingChart() {
  return (
    <div className={`${styles['loading-chart-skeleton']} rounded m-4`}>
      <div className={`${styles['loading-chart-skeleton-title']}`}>
        <div className={`${styles['loading-chart-skeleton-title-line']} rounded mb-1 mr-2`} style={{width: '30%', height: '24px'}}></div>
        <div className={`${styles['loading-chart-skeleton-title-line']} rounded mt-2 mb-1 mr-2`} style={{width: '50%'}}></div>
      </div>
      <div className={`${styles['loading-chart-skeleton-content']} p-4`}>
        <div className={`${styles['loading-chart-skeleton-content-line']} rounded`} style={{height: '30px'}}></div>
        <div className={`${styles['loading-chart-skeleton-content-line']} rounded`} style={{height: '60px'}}></div>
        <div className={`${styles['loading-chart-skeleton-content-line']} rounded`} style={{height: '70px'}}></div>
        <div className={`${styles['loading-chart-skeleton-content-line']} rounded`} style={{height: '130px'}}></div>
        <div className={`${styles['loading-chart-skeleton-content-line']} rounded`} style={{height: '20px'}}></div>
      </div>
      <div className={`${styles['loading-chart-skeleton-title']} mb-4`}>
        <div className={`${styles['loading-chart-skeleton-title-line']} rounded mb-1 mr-2`} style={{width: '70%'}}></div>
      </div>
    </div>
  );
}

