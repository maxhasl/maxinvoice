import useValue from '../../hooks/use-value';
import styles from './input-textarea.module.scss';

const InputTextarea = ({ initialValue, handleContactFrom, placeholder }) => {
  const { value, onChange } = useValue(initialValue, handleContactFrom);

  return (
    <textarea
      placeholder={placeholder}
      className={styles.textarea}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default InputTextarea;
