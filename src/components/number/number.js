import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNumber, mainNumberSelector } from '../../redux/features/main';

import styles from './number.module.scss';

const Number = ({ number, setNumber }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.addon}>#</div>
      <input
        type="number"
        className={styles.number}
        value={number}
        onChange={setNumber}
      />
    </div>
  );
};

Number.propTypes = {
  number: PropTypes.number.isRequired,
  setNumber: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  number: mainNumberSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setNumber: (e) => dispatch(setNumber(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Number);
