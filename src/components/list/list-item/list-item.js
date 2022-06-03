import cn from 'classnames';
import { ReactComponent as Close } from './close.svg';
import styles from './list-item.module.scss';

const ListItem = () => {
  return (
    <div className={styles.wrapper}>
      <textarea
        type="textarea"
        className={cn(styles.input, styles.input__big, styles.textarea)}
      />
      <input type="number" className={styles.input} />
      <div className={styles.cost}>
        <span className={styles.currency}>$</span>
        <input type="number" className={cn(styles.input, styles.input__cost)} />
      </div>
      <div className={styles.amount}>30</div>
      <button className={styles.remove}>
        <Close className={styles.icon} />
      </button>
    </div>
  );
};

export default ListItem;
