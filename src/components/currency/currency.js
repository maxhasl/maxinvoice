import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import {
  setCurrency,
  currencySelectedSelector,
  currencyOptionsSelector,
} from '../../redux/features/currency';

import styles from './currency.module.scss';
import './currency.scss';

const Currency = ({ currency, options, setCurrency }) => {
  return (
    <section>
      <h3 className={styles.title}>CURRENCY</h3>
      <Select
        value={currency}
        onChange={setCurrency}
        options={options}
        className="container"
        classNamePrefix="select"
      />
    </section>
  );
};

Currency.propTypes = {
  currency: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  setCurrency: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currency: currencySelectedSelector(state),
  options: currencyOptionsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrency: (option) => dispatch(setCurrency(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
