import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../input-group.module.scss';

function InputGroupDatepicker({ initialValue, getValue }) {
  const [startDate, setStartDate] = useState(Date.parse(initialValue));

  const onChange = (date) => {
    setStartDate(date);
    getValue(date);
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

export default InputGroupDatepicker;
