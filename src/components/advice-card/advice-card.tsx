import { FC, useEffect, useState } from 'react';

import styles from './styles.module.scss';

interface iAdvice {
  id: number;
  text: string;
}

const AdviceCard: FC = () => {
  const [advice, setAdvice] = useState<iAdvice>({ id: 0, text: '' });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    setIsLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then((response) => {
        response.json()
          .then(res =>
            setAdvice({
              id: res.slip.id,
              text: res.slip.advice
            })
          );
      })
      .then(() => setIsLoading(false));
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.cardWrapper}>
        <span className={styles.adviceNumber}>Advice #{advice.id}</span>
        <p className={styles.adviceText}>
          "{advice.text}"
        </p>
        <div className={styles.divider}/>
      </div>
      <div className={`${styles.button} ${isLoading || styles.loading}`} onClick={fetchAdvice}/>
    </div>
  );
};

export { AdviceCard };
