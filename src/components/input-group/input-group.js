import { useState } from 'react';
import cn from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputGroupName from './input-group-name';
import InputTextarea from '../input-textarea';
import styles from './input-group.module.scss';
import InputText from '../input-text';

const InputGroup = ({ defaultName, type, child }) => {
  const [startDate, setStartDate] = useState(new Date());
  const classType = type === 'col' ? true : false;

  const switchChild = (child) => {
    switch (child) {
      case 'textarea':
        return <InputTextarea />;
      case 'text':
        return <InputText />;
      case 'date':
        return (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            wrapperClassName={styles.datepicker_wrapper}
            className={styles.datepicker_input}
            popperClassName={styles.datepicker__popper}
          />
        );
      default:
        return <InputTextarea />;
    }
  };

  return (
    <div
      className={cn(
        styles.container,
        classType ? styles.container_col : styles.container_row
      )}
    >
      <InputGroupName defaultName={defaultName} />
      {switchChild(child)}
    </div>
  );
};

export default InputGroup;
