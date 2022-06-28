import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Plus } from './plus.svg';

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
  console.log('render Addons');

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

AddonsControl.propTypes = {
  discount: PropTypes.bool,
  tax: PropTypes.bool,
  shipping: PropTypes.bool,
  setDiscountVisible: PropTypes.func.isRequired,
  setTaxVisible: PropTypes.func.isRequired,
  setShippingVisible: PropTypes.func.isRequired,
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
