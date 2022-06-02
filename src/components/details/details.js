import { connect } from 'react-redux';
import InputGroup from '../input-group';
import styles from '../invoice/invoice.module.scss';
import {
  dateTitle,
  dateValue,
  termsTitle,
  termsValue,
  dueDateTitle,
  dueDateValue,
  poNumberTitle,
  poNumberValue,
} from '../../redux/features/details';

export const Details = ({
  detailsDateTitle,
  handleDetailsDateTitle,
  detailsDateValue,
  handleDetailsDateValue,
  detailsTermsTitle,
  handleDetailsTermsTitle,
  detailsTermsValue,
  handleDetailsTermsValue,
  detailsDueDateTitle,
  handleDetailsDueDateTitle,
  detailsDueDateValue,
  handleDetailsDueDateValue,
  detailsPONumberTitle,
  handleDetailsPONumberTitle,
  detailsPONumberValue,
  handleDetailsPONumberValue,
}) => {
  return (
    <div className={styles.form__details}>
      <InputGroup
        initialName={detailsDateTitle}
        getName={handleDetailsDateTitle}
        initialValue={detailsDateValue}
        getValue={handleDetailsDateValue}
        type="row"
        child="date"
      />
      <InputGroup
        initialName={detailsTermsTitle}
        getName={handleDetailsTermsTitle}
        initialValue={detailsTermsValue}
        getValue={handleDetailsTermsValue}
        type="row"
        child="text"
      />
      <InputGroup
        initialName={detailsDueDateTitle}
        getName={handleDetailsDueDateTitle}
        initialValue={detailsDueDateValue}
        getValue={handleDetailsDueDateValue}
        type="row"
        child="date"
      />
      <InputGroup
        initialName={detailsPONumberTitle}
        getName={handleDetailsPONumberTitle}
        initialValue={detailsPONumberValue}
        getValue={handleDetailsPONumberValue}
        type="row"
        child="text"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  detailsDateTitle: state.details.date.title,
  detailsDateValue: state.details.date.value,
  detailsTermsTitle: state.details.terms.title,
  detailsTermsValue: state.details.terms.value,
  detailsDueDateTitle: state.details.dueDate.title,
  detailsDueDateValue: state.details.dueDate.value,
  detailsPONumberTitle: state.details.poNumber.title,
  detailsPONumberValue: state.details.poNumber.value,
});

const mapDispatchToProps = (dispatch) => ({
  handleDetailsDateTitle: (value) => dispatch(dateTitle(value)),
  handleDetailsDateValue: (value) => dispatch(dateValue(String(value))),
  handleDetailsTermsTitle: (value) => dispatch(termsTitle(value)),
  handleDetailsTermsValue: (value) => dispatch(termsValue(value)),
  handleDetailsDueDateTitle: (value) => dispatch(dueDateTitle(value)),
  handleDetailsDueDateValue: (value) => dispatch(dueDateValue(String(value))),
  handleDetailsPONumberTitle: (value) => dispatch(poNumberTitle(value)),
  handleDetailsPONumberValue: (value) => dispatch(poNumberValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
