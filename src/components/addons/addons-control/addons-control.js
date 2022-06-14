import { ReactComponent as Plus } from './plus.svg';
import { connect } from 'react-redux';

import {
  setDiscountVisible,
  setTaxVisible,
  setShippingVisible,
  discountSelector,
  taxSelector,
  shippingSelector,
} from '../../../redux/features/addons';

import styles from './addons-control.module.scss';

const AddonsControl = ({
  discount,
  tax,
  shipping,
  setDiscountVisible,
  setTaxVisible,
  setShippingVisible,
}) => {
  return (
    <div className={styles.wrap}>
      {discount && (
        <button className={styles.button} onClick={setDiscountVisible}>
          <Plus className={styles.icon} />
          Discount
        </button>
      )}
      {tax && (
        <button className={styles.button} onClick={setTaxVisible}>
          <Plus className={styles.icon} />
          Tax
        </button>
      )}
      {shipping && (
        <button className={styles.button} onClick={setShippingVisible}>
          <Plus className={styles.icon} />
          Shipping
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  discount: discountSelector(state).button,
  tax: taxSelector(state).button,
  shipping: shippingSelector(state).button,
});

const mapDispatchToProps = (dispatch) => ({
  setDiscountVisible: () => dispatch(setDiscountVisible()),
  setTaxVisible: () => dispatch(setTaxVisible()),
  setShippingVisible: () => dispatch(setShippingVisible()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddonsControl);
