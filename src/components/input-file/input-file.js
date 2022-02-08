import { ReactComponent as Plus } from './plus.svg';
import styles from './input-file.module.scss';

const InputFile = () => {
  return (
    <div>
      <label>
        <input type="file" />
        <Plus className={styles.plus} />
        Add Your Logo
      </label>
    </div>
  );
};

export default InputFile;
