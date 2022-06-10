import { connect } from 'react-redux';
import InputGroup from '../input-group';
import {
  setDiscountTitle,
  setDiscountValue,
  setDiscountType,
  setTaxTitle,
  setTaxValue,
  setTaxType,
  setShippingTitle,
  setShippingValue,
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
  setTaxTitle,
  setTaxValue,
  setTaxType,
  setShippingTitle,
  setShippingValue,
}) => {
  return (
    <div className={styles.wrapper}>
      <InputGroup
        initialName={discount.title}
        getName={setDiscountTitle}
        initialValue={discount.value}
        getValue={setDiscountValue}
        initialType={discount.type}
        getType={setDiscountType}
        controlled
        type="row"
        child="number"
      />
      <InputGroup
        initialName={tax.title}
        getName={setTaxTitle}
        initialValue={tax.value}
        getValue={setTaxValue}
        initialType={tax.type}
        getType={setTaxType}
        controlled
        type="row"
        child="number"
      />
      <InputGroup
        initialName={shipping.title}
        getName={setShippingTitle}
        initialValue={shipping.value}
        getValue={setShippingValue}
        initialType={shipping.type}
        type="row"
        child="number"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  discount: discountSelector(state),
  tax: taxSelector(state),
  shipping: shippingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setDiscountTitle: (value) => dispatch(setDiscountTitle(value)),
  setDiscountValue: (value) => dispatch(setDiscountValue(+value)),
  setDiscountType: (value) => dispatch(setDiscountType(value)),

  setTaxTitle: (value) => dispatch(setTaxTitle(value)),
  setTaxValue: (value) => dispatch(setTaxValue(+value)),
  setTaxType: (value) => dispatch(setTaxType(value)),

  setShippingTitle: (value) => dispatch(setShippingTitle(value)),
  setShippingValue: (value) => dispatch(setShippingValue(+value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Addons);
