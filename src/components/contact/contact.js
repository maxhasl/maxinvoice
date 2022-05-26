import { connect } from 'react-redux';
import InputTextarea from '../input-textarea';
import InputGroup from '../input-group';
import {
  setContactFromAction,
  setContactBillTitleAction,
  setContactBillValueAction,
  setContactShipTitleAction,
  setContactShipValueAction,
} from '../../redux/actions';
import styles from '../invoice/invoice.module.scss';

const Contact = ({
  contactFromValue,
  contactFromPlaceholder,
  handleContactFrom,
  contactFromBillName,
  handleContactBillTitle,
  contactFromBillValue,
  contactFromBillPlaceholder,
  handleContactBillValue,
  contactFromShipName,
  handleContactShipTitle,
  contactFromShipValue,
  handleContactShipValue,
  contactFromShipPlaceholder,
}) => {
  return (
    <div>
      <div className={styles.form__area_m}>
        <InputTextarea
          initialValue={contactFromValue}
          getValue={handleContactFrom}
          placeholder={contactFromPlaceholder}
        />
      </div>
      <div className={styles.form__row_s}>
        <div className={styles.form__col}>
          <InputGroup
            initialName={contactFromBillName}
            getName={handleContactBillTitle}
            initialValue={contactFromBillValue}
            getValue={handleContactBillValue}
            placeholder={contactFromBillPlaceholder}
            type="col"
            child="textarea"
          />
        </div>
        <div className={styles.form__col}>
          <InputGroup
            initialName={contactFromShipName}
            getName={handleContactShipTitle}
            initialValue={contactFromShipValue}
            getValue={handleContactShipValue}
            placeholder={contactFromShipPlaceholder}
            type="col"
            child="textarea"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contactFromValue: state.contact.from.value,
  contactFromPlaceholder: state.contact.from.placeholder,

  contactFromBillName: state.contact.bill.title,
  contactFromBillValue: state.contact.bill.value,
  contactFromBillPlaceholder: state.contact.bill.placeholder,

  contactFromShipName: state.contact.ship.title,
  contactFromShipValue: state.contact.ship.value,
  contactFromShipPlaceholder: state.contact.ship.placeholder,
});

const mapDispatchToProps = (dispatch) => ({
  handleContactFrom: (value) => dispatch(setContactFromAction(value)),
  handleContactBillTitle: (value) => dispatch(setContactBillTitleAction(value)),
  handleContactBillValue: (value) => dispatch(setContactBillValueAction(value)),
  handleContactShipTitle: (value) => dispatch(setContactShipTitleAction(value)),
  handleContactShipValue: (value) => dispatch(setContactShipValueAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
