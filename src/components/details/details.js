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
  detailsDateSelector,
  detailsTermsSelector,
  detailsDueDateSelector,
  detailsPoNumberSelector,
} from '../../redux/features/details';

export const Details = ({
  date,
  terms,
  dueDate,
  poNumber,
  setDateTitle,
  setDateValue,
  setTermsTitle,
  setTermsValue,
  setDueDateTitle,
  setDueDateValue,
  setPoNumberTitle,
  setPoNumberValue,
}) => {
  return (
    <div className={styles.form__details}>
      <InputGroup
        type="row"
        child="date"
        initialName={date.title}
        getName={setDateTitle}
        initialValue={date.value}
        getValue={setDateValue}
      />
      <InputGroup
        type="row"
        child="text"
        initialName={terms.title}
        getName={setTermsTitle}
        initialValue={terms.value}
        getValue={setTermsValue}
      />
      <InputGroup
        type="row"
        child="date"
        initialName={dueDate.title}
        getName={setDueDateTitle}
        initialValue={dueDate.value}
        getValue={setDueDateValue}
      />
      <InputGroup
        type="row"
        child="text"
        initialName={poNumber.title}
        getName={setPoNumberTitle}
        initialValue={poNumber.value}
        getValue={setPoNumberValue}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  date: detailsDateSelector(state),
  terms: detailsTermsSelector(state),
  dueDate: detailsDueDateSelector(state),
  poNumber: detailsPoNumberSelector(state),
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
