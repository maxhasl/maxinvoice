import PropTypes from 'prop-types';
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
    <section className={styles.wrap}>
      <div className={styles.item}>
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
      <div className={styles.item}>
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
    </section>
  );
};

Description.propTypes = {
  notes: PropTypes.shape({
    title: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
  }),
  terms: PropTypes.shape({
    title: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
  }),
  setNotesTitle: PropTypes.func.isRequired,
  setNotesValue: PropTypes.func.isRequired,
  setTermsTitle: PropTypes.func.isRequired,
  setTermsValue: PropTypes.func.isRequired,
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
