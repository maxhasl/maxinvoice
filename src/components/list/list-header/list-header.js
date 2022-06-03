import { connect } from 'react-redux';
import cn from 'classnames';
import styles from './list-header.module.scss';
import {
  amount,
  cost,
  name,
  quantity,
} from '../../../redux/features/list-header';

const ListHeader = ({
  name,
  quantity,
  cost,
  amount,
  setName,
  setQuantity,
  setCost,
  setAmount,
}) => {
  return (
    <div className={styles.header}>
      <input
        type="text"
        className={cn(styles.header__item, styles.header__item_big)}
        value={name}
        onChange={setName}
      />
      <input
        type="text"
        className={styles.header__item}
        value={quantity}
        onChange={setQuantity}
      />
      <input
        type="text"
        className={styles.header__item}
        value={cost}
        onChange={setCost}
      />
      <input
        type="text"
        className={cn(styles.header__item, styles.header__item_rtl)}
        value={amount}
        onChange={setAmount}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.listHeader.name,
  quantity: state.listHeader.quantity,
  cost: state.listHeader.cost,
  amount: state.listHeader.amount,
});

const mapDispatchToProps = (dispatch) => ({
  setName: (e) => dispatch(name(e.target.value)),
  setQuantity: (e) => dispatch(quantity(e.target.value)),
  setCost: (e) => dispatch(cost(e.target.value)),
  setAmount: (e) => dispatch(amount(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
