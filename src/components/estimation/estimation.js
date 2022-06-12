import { connect } from 'react-redux';
import Total from '../total';
import Addons from '../addons';
import {
  setSubtotalTitle,
  setSubtotalValue,
  subtotalSelector,
  setTotalTitle,
  setTotalValue,
  totalSelector,
  setBalanceDueTitle,
} from '../../redux/features/totals';

import styles from './estimation.module.scss';

const Estimation = ({
  subtotalTitle,
  subtotalValue,
  setSubtotalTitle,
  setSubtotalValue,
  totalTitle,
  totalValue,
  setTotalTitle,
  setTotalValue,
}) => {
  return (
    <div className={styles.wrapper}>
      <Total
        title={subtotalTitle}
        value={subtotalValue}
        getTitle={setSubtotalTitle}
        getValue={setSubtotalValue}
      />
      <Addons />
      <Total
        title={totalTitle}
        value={totalValue}
        getTitle={setTotalTitle}
        getValue={setTotalValue}
      />
      {/* <InputGroup
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
      /> */}
      {/* <Total /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  subtotalTitle: state.totals.subtotal.title,
  subtotalValue: subtotalSelector(state),

  totalTitle: state.totals.total.title,
  totalValue: totalSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSubtotalTitle: (value) => dispatch(setSubtotalTitle(value)),
  setSubtotalValue: (value) => dispatch(setSubtotalValue(value)),

  setTotalTitle: (value) => dispatch(setTotalTitle(value)),
  setTotalValue: (value) => dispatch(setTotalValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Estimation);
