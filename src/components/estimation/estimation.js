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
  setBalanceDueValue,
  balanceDueSelector,
} from '../../redux/features/totals';

import { setPaidTitle, setPaidValue } from '../../redux/features/paid';

import InputGroup from '../input-group';

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
  paidTitle,
  setPaidTitle,
  paidValue,
  setPaidValue,
  paidType,
  balanceDueTitle,
  balanceDueValue,
  setBalanceDueTitle,
  setBalanceDueValue,
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
      <InputGroup
        initialName={paidTitle}
        getName={setPaidTitle}
        initialValue={paidValue}
        getValue={setPaidValue}
        initialType={paidType}
        type="row"
        child="number"
      />
      <Total
        title={balanceDueTitle}
        value={balanceDueValue}
        getTitle={setBalanceDueTitle}
        getValue={setBalanceDueValue}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  subtotalTitle: state.totals.subtotal.title,
  subtotalValue: subtotalSelector(state),

  totalTitle: state.totals.total.title,
  totalValue: totalSelector(state),

  paidTitle: state.paid.title,
  paidValue: state.paid.value,
  paidType: state.paid.type,

  balanceDueTitle: state.totals.balanceDue.title,
  balanceDueValue: balanceDueSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSubtotalTitle: (value) => dispatch(setSubtotalTitle(value)),
  setSubtotalValue: (value) => dispatch(setSubtotalValue(value)),

  setTotalTitle: (value) => dispatch(setTotalTitle(value)),
  setTotalValue: (value) => dispatch(setTotalValue(value)),

  setPaidTitle: (value) => dispatch(setPaidTitle(value)),
  setPaidValue: (value) => dispatch(setPaidValue(value)),

  setBalanceDueTitle: (value) => dispatch(setBalanceDueTitle(value)),
  setBalanceDueValue: (value) => dispatch(setBalanceDueValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Estimation);
