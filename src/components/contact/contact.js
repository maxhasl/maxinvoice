import { connect } from 'react-redux';
import InputTextarea from '../input-group/input-textarea';
import InputGroup from '../input-group';
import {
  setFromValue,
  setBillTitle,
  setBillValue,
  setShipTitle,
  setShipValue,
} from '../../redux/features/contact';
import styles from '../invoice/invoice.module.scss';

const Contact = ({
  fromPlaceholder,
  fromValue,
  setFromValue,
  billPlaceholder,
  billTitle,
  setBillTitle,
  billValue,
  setBillValue,
  shipPlaceholder,
  shipTitle,
  setShipTitle,
  shipValue,
  setShipValue,
}) => {
  return (
    <div>
      <div className={styles.form__area_m}>
        <InputTextarea
          placeholder={fromPlaceholder}
          initialValue={fromValue}
          getValue={setFromValue}
        />
      </div>
      <div className={styles.form__row_s}>
        <div className={styles.form__col}>
          <InputGroup
            type="col"
            child="textarea"
            placeholder={billPlaceholder}
            initialName={billTitle}
            getName={setBillTitle}
            initialValue={billValue}
            getValue={setBillValue}
          />
        </div>
        <div className={styles.form__col}>
          <InputGroup
            type="col"
            child="textarea"
            placeholder={shipPlaceholder}
            initialName={shipTitle}
            getName={setShipTitle}
            initialValue={shipValue}
            getValue={setShipValue}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fromPlaceholder: state.contact.from.placeholder,
  fromValue: state.contact.from.value,

  billPlaceholder: state.contact.bill.placeholder,
  billTitle: state.contact.bill.title,
  billValue: state.contact.bill.value,

  shipPlaceholder: state.contact.ship.placeholder,
  shipTitle: state.contact.ship.title,
  shipValue: state.contact.ship.value,
});

const mapDispatchToProps = (dispatch) => ({
  setFromValue: (value) => dispatch(setFromValue(value)),
  setBillTitle: (value) => dispatch(setBillTitle(value)),
  setBillValue: (value) => dispatch(setBillValue(value)),
  setShipTitle: (value) => dispatch(setShipTitle(value)),
  setShipValue: (value) => dispatch(setShipValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
