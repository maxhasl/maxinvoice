import styles from './input-textarea.module.scss';

const InputTextarea = ({ placeholder }) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        required
        className={styles.textarea}
      ></textarea>
    </div>
  );
};

export default InputTextarea;
