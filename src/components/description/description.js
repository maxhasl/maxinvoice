import { connect } from 'react-redux';
import InputGroup from '../input-group';
import {
  setNotesTitle,
  setNotesValue,
  setTermsTitle,
  setTermsValue,
} from '../../redux/features/description';

import styles from './description.module.scss';

const Description = ({
  notesPlaceholder,
  notesTitle,
  setNotesTitle,
  notesValue,
  setNotesValue,
  termsPlaceholder,
  termsTitle,
  setTermsTitle,
  termsValue,
  setTermsValue,
}) => {
  return (
    <div>
      <div className={styles.description__item}>
        <InputGroup
          type="col"
          child="textarea"
          placeholder={notesPlaceholder}
          initialName={notesTitle}
          getName={setNotesTitle}
          initialValue={notesValue}
          getValue={setNotesValue}
        />
      </div>
      <div className={styles.description__item}>
        <InputGroup
          type="col"
          child="textarea"
          placeholder={termsPlaceholder}
          initialName={termsTitle}
          getName={setTermsTitle}
          initialValue={termsValue}
          getValue={setTermsValue}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notesPlaceholder: state.description.notes.placeholder,
  notesTitle: state.description.notes.title,
  notesValue: state.description.notes.value,

  termsPlaceholder: state.description.terms.placeholder,
  termsTitle: state.description.terms.title,
  termsValue: state.description.terms.value,
});

const mapDispatchToProps = (dispatch) => ({
  setNotesTitle: (value) => dispatch(setNotesTitle(value)),
  setNotesValue: (value) => dispatch(setNotesValue(value)),

  setTermsTitle: (value) => dispatch(setTermsTitle(value)),
  setTermsValue: (value) => dispatch(setTermsValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
