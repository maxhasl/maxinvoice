import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { currencySelectedSelector } from '../../redux/features/currency';
import styles from './total.module.scss';

const Total = ({ title, value, getTitle, getValue, currency }) => {
  useEffect(() => {
    getValue(value);
  }, [value, getValue]);

  return (
    <div className={styles.wrap}>
      <input
        type="text"
        className={styles.title}
        defaultValue={title}
        onChange={(e) => getTitle(e.target.value || '')}
      />
      <div className={styles.value}>
        {currency.value}
        {value.toLocaleString()}
      </div>
    </div>
  );
};

Total.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  getTitle: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  currency: PropTypes.objectOf(PropTypes.string.isRequired),
};

const mapStateToProps = (state) => ({
  currency: currencySelectedSelector(state),
});

export default connect(mapStateToProps)(Total);
