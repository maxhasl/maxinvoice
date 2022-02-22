import useValue from '../../hooks/use-value';
import styles from './input-number.module.scss';

const InputNumber = ({ initialValue, getValue }) => {
  const { value, onChange } = useValue(initialValue, getValue);

  return (
    <div className={styles.container}>
      <div className={styles.addon}>#</div>
      <input
        type="number"
        className={styles.number}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputNumber;
