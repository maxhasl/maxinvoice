import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './input-group-datapicker.module.scss';
import './input-group-datapicker.scss';

function InputGroupDatepicker({ initialValue, getValue }) {
  const [startDate, setStartDate] = useState(Date.parse(initialValue));

  const onChange = (date) => {
    setStartDate(date);
    getValue(moment(date).format('MM/DD/YYYY'));
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      wrapperClassName={styles.datepicker_wrapper}
      className={styles.datepicker_input}
      popperClassName={styles.datepicker__popper}
    />
  );
}

InputGroupDatepicker.propTypes = {
  initialValue: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
};

export default InputGroupDatepicker;
