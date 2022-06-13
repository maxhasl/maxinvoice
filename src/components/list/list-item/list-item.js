import cn from 'classnames';
import { connect } from 'react-redux';
import { ReactComponent as Close } from './close.svg';
import {
  listItemSelector,
  removeListItem,
  setListItemName,
  setListItemQuantity,
  setListItemCost,
} from '../../../redux/features/list';
import styles from './list-item.module.scss';

const ListItem = ({
  item,
  removeListItem,
  setListItemName,
  setListItemQuantity,
  setListItemCost,
}) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        type="textarea"
        className={cn(styles.input, styles.input__big, styles.textarea)}
        value={item.name}
        onChange={setListItemName}
      />
      <input
        type="number"
        className={styles.input}
        value={item.quantity}
        onChange={setListItemQuantity}
      />
      <div className={styles.cost}>
        <span className={styles.currency}>$</span>
        <input
          type="number"
          className={cn(styles.input, styles.input__cost)}
          value={item.cost}
          onChange={setListItemCost}
        />
      </div>
      <div className={styles.amount}>${item.amount.toLocaleString()}</div>
      <button className={styles.remove} onClick={removeListItem}>
        <Close className={styles.icon} />
      </button>
    </div>
  );
};

const mapStateToProps = (state, { id }) => ({
  item: listItemSelector(state, id),
});

const mapDispatchToProps = (dispatch, props) => ({
  removeListItem: () => dispatch(removeListItem(props.id)),
  setListItemName: (e) =>
    dispatch(
      setListItemName({ id: props.id, changes: { name: e.target.value || '' } })
    ),
  setListItemQuantity: (e) => {
    dispatch(
      setListItemQuantity({ id: props.id, quantity: e.target.value || '' })
    );
  },
  setListItemCost: (e) => {
    dispatch(setListItemCost({ id: props.id, cost: e.target.value || '' }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
