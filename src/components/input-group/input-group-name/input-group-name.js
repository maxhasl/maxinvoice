import styles from './input-group-name.module.scss';

const InputGroupName = ({ defaultName }) => {
  return <input type="text" className={styles.name} value={defaultName} />;
};

export default InputGroupName;
