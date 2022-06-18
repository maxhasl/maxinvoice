import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';
import styles from './list-header.module.scss';
import {
  setListHeaderName,
  setListHeaderQuantity,
  setListHeaderCost,
  setListHeaderAmount,
  listHeaderSelector,
} from '../../../redux/features/list';

const ListHeader = ({
  listHeader,
  setListHeaderName,
  setListHeaderQuantity,
  setListHeaderCost,
  setListHeaderAmount,
}) => {
  return (
    <div className={styles.wrap}>
      <input
        type="text"
        className={cn(styles.item, styles.item_big)}
        value={listHeader.name}
        onChange={setListHeaderName}
      />
      <input
        type="text"
        className={styles.item}
        value={listHeader.quantity}
        onChange={setListHeaderQuantity}
      />
      <input
        type="text"
        className={styles.item}
        value={listHeader.cost}
        onChange={setListHeaderCost}
      />
      <input
        type="text"
        className={cn(styles.item, styles.item_rtl)}
        value={listHeader.amount}
        onChange={setListHeaderAmount}
      />
    </div>
  );
};

ListHeader.propTypes = {
  listHeader: PropTypes.objectOf(PropTypes.string.isRequired),
  setListHeaderName: PropTypes.func.isRequired,
  setListHeaderQuantity: PropTypes.func.isRequired,
  setListHeaderCost: PropTypes.func.isRequired,
  setListHeaderAmount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listHeader: listHeaderSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setListHeaderName: (e) => dispatch(setListHeaderName(e.target.value)),
  setListHeaderQuantity: (e) => dispatch(setListHeaderQuantity(e.target.value)),
  setListHeaderCost: (e) => dispatch(setListHeaderCost(e.target.value)),
  setListHeaderAmount: (e) => dispatch(setListHeaderAmount(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
