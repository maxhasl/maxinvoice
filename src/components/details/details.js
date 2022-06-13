import { connect } from 'react-redux';
import InputGroup from '../input-group';
import styles from '../invoice/invoice.module.scss';
import {
  setDateTitle,
  setDateValue,
  setTermsTitle,
  setTermsValue,
  setDueDateTitle,
  setDueDateValue,
  setPoNumberTitle,
  setPoNumberValue,
} from '../../redux/features/details';

export const Details = ({
  dateTitle,
  setDateTitle,
  dateValue,
  setDateValue,
  termsTitle,
  setTermsTitle,
  termsValue,
  setTermsValue,
  dueDateTitle,
  setDueDateTitle,
  dueDateValue,
  setDueDateValue,
  poNumberTitle,
  setPoNumberTitle,
  poNumberValue,
  setPoNumberValue,
}) => {
  return (
    <div className={styles.form__details}>
      <InputGroup
        type="row"
        child="date"
        initialName={dateTitle}
        getName={setDateTitle}
        initialValue={dateValue}
        getValue={setDateValue}
      />
      <InputGroup
        type="row"
        child="text"
        initialName={termsTitle}
        getName={setTermsTitle}
        initialValue={termsValue}
        getValue={setTermsValue}
      />
      <InputGroup
        type="row"
        child="date"
        initialName={dueDateTitle}
        getName={setDueDateTitle}
        initialValue={dueDateValue}
        getValue={setDueDateValue}
      />
      <InputGroup
        type="row"
        child="text"
        initialName={poNumberTitle}
        getName={setPoNumberTitle}
        initialValue={poNumberValue}
        getValue={setPoNumberValue}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dateTitle: state.details.date.title,
  dateValue: state.details.date.value,
  termsTitle: state.details.terms.title,
  termsValue: state.details.terms.value,
  dueDateTitle: state.details.dueDate.title,
  dueDateValue: state.details.dueDate.value,
  poNumberTitle: state.details.poNumber.title,
  poNumberValue: state.details.poNumber.value,
});

const mapDispatchToProps = (dispatch) => ({
  setDateTitle: (value) => dispatch(setDateTitle(value)),
  setDateValue: (value) => dispatch(setDateValue(String(value))),
  setTermsTitle: (value) => dispatch(setTermsTitle(value)),
  setTermsValue: (value) => dispatch(setTermsValue(value)),
  setDueDateTitle: (value) => dispatch(setDueDateTitle(value)),
  setDueDateValue: (value) => dispatch(setDueDateValue(String(value))),
  setPoNumberTitle: (value) => dispatch(setPoNumberTitle(value)),
  setPoNumberValue: (value) => dispatch(setPoNumberValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
