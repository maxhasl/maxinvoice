import styles from './input-number.module.scss';

const InputNumber = ({ defaultValue }) => {
  return (
    <div className={styles.container}>
      <div className={styles.addon}>#</div>
      <input type="number" className={styles.number} value={defaultValue} />
    </div>
  );
};

export default InputNumber;
