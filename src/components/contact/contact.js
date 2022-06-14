import { connect } from 'react-redux';
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
import styles from '../invoice/invoice.module.scss';

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
    <div>
      <div className={styles.form__area_m}>
        <InputTextarea
          placeholder={from.placeholder}
          initialValue={from.value}
          getValue={setFromValue}
        />
      </div>
      <div className={styles.form__row_s}>
        <div className={styles.form__col}>
          <InputGroup
            type="col"
            child="textarea"
            placeholder={bill.placeholder}
            initialName={bill.title}
            getName={setBillTitle}
            initialValue={bill.value}
            getValue={setBillValue}
          />
        </div>
        <div className={styles.form__col}>
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
    </div>
  );
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
