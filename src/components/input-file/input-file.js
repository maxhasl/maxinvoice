import { ReactComponent as Plus } from './plus.svg';
import styles from './input-file.module.scss';

const InputFile = () => {
  return (
    <label className={styles.label}>
      <input type="file" className={styles.file} />
      <Plus className={styles.plus} />
      Add Your Logo
    </label>
  );
};

export default InputFile;
