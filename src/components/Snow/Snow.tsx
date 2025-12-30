import styles from './Snow.module.css';

interface SnowfallProps {
  count?: number;
}

export const Snowfall = ({ count = 100 }: SnowfallProps) => {
  return (
    <div className={styles.snowContainer}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.snowflake} />
      ))}
    </div>
  );
};
