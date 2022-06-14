import { connect } from 'react-redux';
import InputGroup from '../input-group';
import {
  setNotesTitle,
  setNotesValue,
  setTermsTitle,
  setTermsValue,
  descriptionNotesSelector,
  descriptionTermsSelector,
} from '../../redux/features/description';

import styles from './description.module.scss';

const Description = ({
  notes,
  terms,
  setNotesTitle,
  setNotesValue,
  setTermsTitle,
  setTermsValue,
}) => {
  return (
    <div>
      <div className={styles.description__item}>
        <InputGroup
          type="col"
          child="textarea"
          placeholder={notes.placeholder}
          initialName={notes.title}
          getName={setNotesTitle}
          initialValue={notes.value}
          getValue={setNotesValue}
        />
      </div>
      <div className={styles.description__item}>
        <InputGroup
          type="col"
          child="textarea"
          placeholder={terms.placeholder}
          initialName={terms.title}
          getName={setTermsTitle}
          initialValue={terms.value}
          getValue={setTermsValue}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: descriptionNotesSelector(state),
  terms: descriptionTermsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setNotesTitle: (value) => dispatch(setNotesTitle(value)),
  setNotesValue: (value) => dispatch(setNotesValue(value)),

  setTermsTitle: (value) => dispatch(setTermsTitle(value)),
  setTermsValue: (value) => dispatch(setTermsValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
