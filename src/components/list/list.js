import ListAdd from './list-add/list-add';
import ListHeader from './list-header';
import ListItem from './list-item/list-item';
import styles from './list.module.scss';

const List = () => {
  return (
    <div className={styles.list}>
      <ListHeader />
      <ListItem />
      <ListItem />
      <ListAdd />
    </div>
  );
};

export default List;
