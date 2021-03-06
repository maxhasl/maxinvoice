import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';
import { ReactComponent as Repeat } from './repeat.svg';
import { currencySelectedSelector } from '../../../redux/features/currency';
import styles from './input-number.module.scss';

const InputNumber = ({
  controlled,
  initialValue,
  getValue,
  initialType,
  getType,
  currency,
}) => {
  const [type, setType] = useState(initialType);

  const changeType = () => {
    let newType = type === 'cash' ? 'percent' : 'cash';
    setType(newType);
    getType(newType);
  };

  return (
    <div className={styles.wrap}>
      <span className={styles.type}>
        {type === 'cash' ? currency.value : '%'}
      </span>
      <input
        type="number"
        className={cn(styles.input, controlled && styles.input__controlled)}
        value={initialValue}
        onChange={(e) => getValue(e.target.value)}
      />

      {controlled && (
        <button className={styles.button} onClick={changeType}>
          <Repeat className={styles.icon} />
        </button>
      )}
    </div>
  );
};

InputNumber.propTypes = {
  controlled: PropTypes.bool,
  initialValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  initialType: PropTypes.oneOf(['cash', 'percent']),
  currency: PropTypes.objectOf(PropTypes.string),
  getValue: PropTypes.func.isRequired,
  getType: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currency: currencySelectedSelector(state),
});

export default connect(mapStateToProps)(InputNumber);
