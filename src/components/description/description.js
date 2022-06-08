import { connect } from 'react-redux';
import InputGroup from '../input-group';
import {
  notesTitle,
  notesValue,
  termsTitle,
  termsValue,
} from '../../redux/features/description';

import styles from './description.module.scss';

const Description = ({
  notesTitle,
  notesPlaceholder,
  notesValue,
  setNotesTitle,
  setNotesValue,
  termsTitle,
  termsPlaceholder,
  termsValue,
  setTermsTitle,
  setTermsValue,
}) => {
  return (
    <div>
      <div className={styles.description__item}>
        <InputGroup
          initialName={notesTitle}
          getName={setNotesTitle}
          initialValue={notesValue}
          getValue={setNotesValue}
          placeholder={notesPlaceholder}
          type="col"
          child="textarea"
        />
      </div>
      <div className={styles.description__item}>
        <InputGroup
          initialName={termsTitle}
          getName={setTermsTitle}
          initialValue={termsValue}
          getValue={setTermsValue}
          placeholder={termsPlaceholder}
          type="col"
          child="textarea"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notesTitle: state.description.notes.title,
  notesPlaceholder: state.description.notes.placeholder,
  notesValue: state.description.notes.value,

  termsTitle: state.description.terms.title,
  termsPlaceholder: state.description.terms.placeholder,
  termsValue: state.description.terms.value,
});

const mapDispatchToProps = (dispatch) => ({
  setNotesTitle: (value) => dispatch(notesTitle(value)),
  setNotesValue: (value) => dispatch(notesValue(value)),

  setTermsTitle: (value) => dispatch(termsTitle(value)),
  setTermsValue: (value) => dispatch(termsValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
