import React from 'react';
import styles from './LoadingSpinner.module.css'

type Props = {};

const LoadingSpinner: React.FC<Props> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default LoadingSpinner;