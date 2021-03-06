import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputGroup from '../input-group';
import AddonsControl from './addons-control/addons-control';
import {
  setDiscountTitle,
  setDiscountValue,
  setDiscountType,
  setDiscountVisible,
  setTaxTitle,
  setTaxValue,
  setTaxType,
  setTaxVisible,
  setShippingTitle,
  setShippingValue,
  setShippingVisible,
  discountSelector,
  taxSelector,
  shippingSelector,
} from '../../redux/features/addons';

import styles from './addons.module.scss';

const Addons = ({
  discount,
  tax,
  shipping,
  setDiscountTitle,
  setDiscountValue,
  setDiscountType,
  setDiscountVisible,
  setTaxTitle,
  setTaxValue,
  setTaxType,
  setTaxVisible,
  setShippingTitle,
  setShippingValue,
  setShippingVisible,
}) => {
  return (
    <section className={styles.wrap}>
      <InputGroup
        type="row"
        child="number"
        controlled
        close={true}
        visible={discount.visible}
        initialName={discount.title}
        getName={setDiscountTitle}
        initialValue={discount.value}
        getValue={setDiscountValue}
        initialType={discount.type}
        getType={setDiscountType}
        setClose={setDiscountVisible}
      />
      <InputGroup
        type="row"
        child="number"
        controlled
        close={true}
        visible={tax.visible}
        setClose={setTaxVisible}
        initialName={tax.title}
        getName={setTaxTitle}
        initialValue={tax.value}
        getValue={setTaxValue}
        initialType={tax.type}
        getType={setTaxType}
      />
      <InputGroup
        type="row"
        child="number"
        close={true}
        visible={shipping.visible}
        setClose={setShippingVisible}
        initialType={shipping.type}
        initialName={shipping.title}
        getName={setShippingTitle}
        initialValue={shipping.value}
        getValue={setShippingValue}
      />
      <AddonsControl />
    </section>
  );
};

Addons.propTypes = {
  discount: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(['cash', 'percent']),
    visible: PropTypes.bool.isRequired,
    button: PropTypes.bool.isRequired,
  }),
  tax: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(['cash', 'percent']),
    visible: PropTypes.bool.isRequired,
    button: PropTypes.bool.isRequired,
  }),
  shipping: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(['cash', 'percent']),
    visible: PropTypes.bool.isRequired,
    button: PropTypes.bool.isRequired,
  }),
  setDiscountTitle: PropTypes.func.isRequired,
  setDiscountValue: PropTypes.func.isRequired,
  setDiscountType: PropTypes.func.isRequired,
  setDiscountVisible: PropTypes.func.isRequired,
  setTaxTitle: PropTypes.func.isRequired,
  setTaxValue: PropTypes.func.isRequired,
  setTaxType: PropTypes.func.isRequired,
  setTaxVisible: PropTypes.func.isRequired,
  setShippingTitle: PropTypes.func.isRequired,
  setShippingValue: PropTypes.func.isRequired,
  setShippingVisible: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  discount: discountSelector(state),
  tax: taxSelector(state),
  shipping: shippingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setDiscountTitle: (value) => dispatch(setDiscountTitle(value)),
  setDiscountValue: (value) => dispatch(setDiscountValue(value)),
  setDiscountType: (value) => dispatch(setDiscountType(value)),
  setDiscountVisible: () => dispatch(setDiscountVisible()),

  setTaxTitle: (value) => dispatch(setTaxTitle(value)),
  setTaxValue: (value) => dispatch(setTaxValue(value)),
  setTaxType: (value) => dispatch(setTaxType(value)),
  setTaxVisible: () => dispatch(setTaxVisible()),

  setShippingTitle: (value) => dispatch(setShippingTitle(value)),
  setShippingValue: (value) => dispatch(setShippingValue(value)),
  setShippingVisible: () => dispatch(setShippingVisible()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Addons);
