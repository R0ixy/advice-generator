import { FC } from 'react';

import styles from './styles.module.scss';

const AdviceCard: FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.cardWrapper}>
        <span className={styles.adviceNumber}>Advice #117</span>
        <p className={styles.adviceText}>
          "Once you find a really good friend don't do anything that could mess up your
          friendship."
        </p>
        <div className={styles.divider}/>
      </div>
      <div className={styles.button} />
    </div>
  );
};

export { AdviceCard };
