import { connect } from 'react-redux';
import cn from 'classnames';
import styles from './list-header.module.scss';
import {
  setListHeaderName,
  setListHeaderQuantity,
  setListHeaderCost,
  setListHeaderAmount,
} from '../../../redux/features/list';

const ListHeader = ({
  name,
  quantity,
  cost,
  amount,
  setListHeaderName,
  setListHeaderQuantity,
  setListHeaderCost,
  setListHeaderAmount,
}) => {
  return (
    <div className={styles.header}>
      <input
        type="text"
        className={cn(styles.header__item, styles.header__item_big)}
        value={name}
        onChange={setListHeaderName}
      />
      <input
        type="text"
        className={styles.header__item}
        value={quantity}
        onChange={setListHeaderQuantity}
      />
      <input
        type="text"
        className={styles.header__item}
        value={cost}
        onChange={setListHeaderCost}
      />
      <input
        type="text"
        className={cn(styles.header__item, styles.header__item_rtl)}
        value={amount}
        onChange={setListHeaderAmount}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.list.listHeader.name,
  quantity: state.list.listHeader.quantity,
  cost: state.list.listHeader.cost,
  amount: state.list.listHeader.amount,
});

const mapDispatchToProps = (dispatch) => ({
  setListHeaderName: (e) => dispatch(setListHeaderName(e.target.value)),
  setListHeaderQuantity: (e) => dispatch(setListHeaderQuantity(e.target.value)),
  setListHeaderCost: (e) => dispatch(setListHeaderCost(e.target.value)),
  setListHeaderAmount: (e) => dispatch(setListHeaderAmount(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
