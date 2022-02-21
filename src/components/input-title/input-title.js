import useValue from '../../hooks/use-value';
import styles from './input-title.module.scss';

const InputTitle = ({ initialValue, handleTitle }) => {
  const { value, onChange } = useValue(initialValue, handleTitle);

  return (
    <input
      type="text"
      className={styles.title}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputTitle;
