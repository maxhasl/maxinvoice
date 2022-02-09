import styles from './input-textarea.module.scss';

const InputTextarea = ({ placeholder }) => {
  return (
    <textarea placeholder={placeholder} className={styles.textarea}></textarea>
  );
};

export default InputTextarea;
