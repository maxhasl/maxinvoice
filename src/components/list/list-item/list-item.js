import cn from 'classnames';
import { connect } from 'react-redux';
import { ReactComponent as Close } from './close.svg';
import {
  listItemSelector,
  remove,
  name,
  quantity,
  cost,
  amount,
} from '../../../redux/features/list';
import styles from './list-item.module.scss';

const ListItem = ({ item, remove, name, quantity, cost }) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        type="textarea"
        className={cn(styles.input, styles.input__big, styles.textarea)}
        value={item.name}
        onChange={name}
      />
      <input
        type="number"
        className={styles.input}
        value={item.quantity}
        onChange={quantity}
      />
      <div className={styles.cost}>
        <span className={styles.currency}>$</span>
        <input
          type="number"
          className={cn(styles.input, styles.input__cost)}
          value={item.cost}
          onChange={cost}
        />
      </div>
      <div className={styles.amount}>${item.amount.toLocaleString()}</div>
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
  name: (e) =>
    dispatch(name({ id: props.id, changes: { name: e.target.value || '' } })),
  quantity: (e) => {
    dispatch(quantity({ id: props.id, quantity: e.target.value || '' }));
  },
  cost: (e) => {
    dispatch(cost({ id: props.id, cost: e.target.value || '' }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
