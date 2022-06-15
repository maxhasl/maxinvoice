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
    <div>
      <h3 className={styles.title}>CURRENCY</h3>
      <Select
        value={currency}
        onChange={setCurrency}
        options={options}
        className="container"
        classNamePrefix="select"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currency: currencySelectedSelector(state),
  options: currencyOptionsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrency: (option) => dispatch(setCurrency(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
