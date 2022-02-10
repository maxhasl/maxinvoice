import styles from './input-title.module.scss';

const InputTitle = ({ defaultValue }) => {
  return <input type="text" className={styles.title} value={defaultValue} />;
};

export default InputTitle;
