import ListHeader from './list-header';
import styles from './list.module.scss';

const List = () => {
  return (
    <div className={styles.list}>
      <ListHeader />
    </div>
  );
};

export default List;
