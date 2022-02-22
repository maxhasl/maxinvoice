import useValue from '../../hooks/use-value';
import styles from './input-text.module.scss';

const InputText = ({ initialValue, getValue }) => {
  const { value, onChange } = useValue(initialValue, getValue);

  return (
    <input
      type="text"
      className={styles.text}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;
