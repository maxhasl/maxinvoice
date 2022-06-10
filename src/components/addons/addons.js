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
    <div className={styles.wrapper}>
      <InputGroup
        initialName={discount.title}
        getName={setDiscountTitle}
        initialValue={discount.value}
        getValue={setDiscountValue}
        initialType={discount.type}
        getType={setDiscountType}
        visible={discount.visible}
        close={true}
        setClose={setDiscountVisible}
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
        visible={tax.visible}
        close={true}
        setClose={setTaxVisible}
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
        visible={shipping.visible}
        close={true}
        setClose={setShippingVisible}
        type="row"
        child="number"
      />
      <AddonsControl />
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
  setDiscountVisible: () => dispatch(setDiscountVisible()),

  setTaxTitle: (value) => dispatch(setTaxTitle(value)),
  setTaxValue: (value) => dispatch(setTaxValue(+value)),
  setTaxType: (value) => dispatch(setTaxType(value)),
  setTaxVisible: () => dispatch(setTaxVisible()),

  setShippingTitle: (value) => dispatch(setShippingTitle(value)),
  setShippingValue: (value) => dispatch(setShippingValue(+value)),
  setShippingVisible: () => dispatch(setShippingVisible()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Addons);
