import { ReactComponent as Plus } from './plus.svg';
import styles from './list-add.module.scss';

const ListAdd = () => {
  return (
    <button className={styles.button}>
      <Plus className={styles.icon} />
      Line Item
    </button>
  );
};

export default ListAdd;
