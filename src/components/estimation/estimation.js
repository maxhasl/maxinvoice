import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Total from '../total';
import Addons from '../addons';
import InputGroup from '../input-group';
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
import {
  setPaidTitle,
  setPaidValue,
  paidSelector,
} from '../../redux/features/paid';

const Estimation = ({
  subtotalTitle,
  setSubtotalTitle,
  subtotalValue,
  setSubtotalValue,
  totalTitle,
  setTotalTitle,
  totalValue,
  setTotalValue,
  paid,
  setPaidTitle,
  setPaidValue,
  balanceDueTitle,
  setBalanceDueTitle,
  balanceDueValue,
  setBalanceDueValue,
}) => {
  return (
    <section>
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
        type="row"
        child="number"
        initialName={paid.title}
        getName={setPaidTitle}
        initialValue={paid.value}
        getValue={setPaidValue}
        initialType={paid.type}
      />
      <Total
        title={balanceDueTitle}
        value={balanceDueValue}
        getTitle={setBalanceDueTitle}
        getValue={setBalanceDueValue}
      />
    </section>
  );
};

Estimation.propTypes = {
  subtotalTitle: PropTypes.string.isRequired,
  subtotalValue: PropTypes.number.isRequired,
  totalTitle: PropTypes.string.isRequired,
  totalValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paid: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(['cash']),
  }),
  balanceDueTitle: PropTypes.string.isRequired,
  balanceDueValue: PropTypes.number.isRequired,
  setSubtotalTitle: PropTypes.func,
  setSubtotalValue: PropTypes.func,
  setTotalTitle: PropTypes.func.isRequired,
  setTotalValue: PropTypes.func.isRequired,
  setPaidTitle: PropTypes.func.isRequired,
  setPaidValue: PropTypes.func.isRequired,
  setBalanceDueTitle: PropTypes.func.isRequired,
  setBalanceDueValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  subtotalTitle: state.totals.subtotal.title,
  subtotalValue: subtotalSelector(state),

  totalTitle: state.totals.total.title,
  totalValue: totalSelector(state),

  paid: paidSelector(state),

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
