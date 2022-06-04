import cn from 'classnames';
import { connect } from 'react-redux';
import { ReactComponent as Close } from './close.svg';
import { listItemSelector, remove, name } from '../../../redux/features/list';
import styles from './list-item.module.scss';

const ListItem = ({ id, item, remove }) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        type="textarea"
        className={cn(styles.input, styles.input__big, styles.textarea)}
        defaultValue={item.name}
      />
      <input
        type="number"
        className={styles.input}
        defaultValue={item.quantity}
      />
      <div className={styles.cost}>
        <span className={styles.currency}>$</span>
        <input
          type="number"
          className={cn(styles.input, styles.input__cost)}
          defaultValue={item.cost}
        />
      </div>
      <div className={styles.amount}>{item.amount}</div>
      <button className={styles.remove} onClick={remove}>
        <Close className={styles.icon} />
      </button>
    </div>
  );
};

const mapStateToProps = (state, { id }) => ({
  item: listItemSelector(state, id),
});

const mapDispatchToProps = (dispatch, props) => ({
  remove: () => dispatch(remove(props.id)),
  name: () => dispatch(name(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
