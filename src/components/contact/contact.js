import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';
import InputTextarea from '../input-group/input-textarea';
import InputGroup from '../input-group';
import {
  setFromValue,
  setBillTitle,
  setBillValue,
  setShipTitle,
  setShipValue,
  contactFromSelector,
  contactBillSelector,
  contactShipSelector,
} from '../../redux/features/contact';

import styles from './contact.module.scss';

const Contact = ({
  from,
  bill,
  ship,
  setFromValue,
  setBillTitle,
  setBillValue,
  setShipTitle,
  setShipValue,
}) => {
  return (
    <section>
      <div className={styles.from}>
        <InputTextarea
          placeholder={from.placeholder}
          required
          initialValue={from.value}
          getValue={setFromValue}
        />
      </div>
      <div className={cn(styles.row, styles.row_m)}>
        <div className={cn(styles.col, styles.col_m)}>
          <InputGroup
            type="col"
            child="textarea"
            required
            placeholder={bill.placeholder}
            initialName={bill.title}
            getName={setBillTitle}
            initialValue={bill.value}
            getValue={setBillValue}
          />
        </div>
        <div className={cn(styles.col, styles.col_m)}>
          <InputGroup
            type="col"
            child="textarea"
            placeholder={ship.placeholder}
            initialName={ship.title}
            getName={setShipTitle}
            initialValue={ship.value}
            getValue={setShipValue}
          />
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  from: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
  }),
  bill: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    title: PropTypes.string,
    value: PropTypes.string,
  }),
  ship: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    title: PropTypes.string,
    value: PropTypes.string,
  }),
  setFromValue: PropTypes.func.isRequired,
  setBillTitle: PropTypes.func.isRequired,
  setBillValue: PropTypes.func.isRequired,
  setShipTitle: PropTypes.func.isRequired,
  setShipValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  from: contactFromSelector(state),
  bill: contactBillSelector(state),
  ship: contactShipSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFromValue: (value) => dispatch(setFromValue(value)),
  setBillTitle: (value) => dispatch(setBillTitle(value)),
  setBillValue: (value) => dispatch(setBillValue(value)),
  setShipTitle: (value) => dispatch(setShipTitle(value)),
  setShipValue: (value) => dispatch(setShipValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
