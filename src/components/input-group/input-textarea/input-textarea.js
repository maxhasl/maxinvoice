import TextareaAutosize from 'react-textarea-autosize';
import useValue from '../../../hooks/use-value';
import styles from './input-textarea.module.scss';

const InputTextarea = ({ initialValue, getValue, placeholder }) => {
  const { value, onChange } = useValue(initialValue, getValue);

  return (
    <TextareaAutosize
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputTextarea;
