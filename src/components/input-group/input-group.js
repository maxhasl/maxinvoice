import { useState } from 'react';
import cn from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputGroupName from './input-group-name';
import InputTextarea from '../input-textarea';
import styles from './input-group.module.scss';
import InputText from '../input-text';

const InputGroup = ({
  initialName,
  getName,
  initialValue,
  getValue,
  placeholder,
  type,
  child,
}) => {
  const [startDate, setStartDate] = useState(initialValue);
  const classType = type === 'col' ? true : false;

  const switchChild = (child) => {
    switch (child) {
      case 'textarea':
        return (
          <InputTextarea
            placeholder={placeholder}
            initialValue={initialValue}
            getValue={getValue}
          />
        );
      case 'text':
        return <InputText initialValue={initialValue} getValue={getValue} />;
      case 'date':
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
      default:
        return (
          <InputTextarea
            placeholder={placeholder}
            initialValue={initialValue}
            getValue={getValue}
          />
        );
    }
  };

  return (
    <div
      className={cn(
        styles.container,
        classType ? styles.container_col : styles.container_row
      )}
    >
      <InputGroupName initialName={initialName} getName={getName} />
      {switchChild(child)}
    </div>
  );
};

export default InputGroup;
