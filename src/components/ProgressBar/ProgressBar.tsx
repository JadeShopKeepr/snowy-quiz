import christmasTree from './christmas.png';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const width = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className={styles.track}>
      <div className={styles.fill} style={{ width: `${width}%` }} />
      <img src={christmasTree} alt='tree' className={styles.tree} style={{ left: `calc(${width}% - 15px)` }} />
    </div>
  );
};
