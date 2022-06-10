import { useState } from 'react';
import { ReactComponent as Repeat } from './repeat.svg';
import cn from 'classnames';
import useValue from '../../hooks/use-value';
import styles from './input-number.module.scss';

const InputNumber = ({
  controlled,
  initialValue,
  getValue,
  initialType,
  getType,
}) => {
  const { value, onChange } = useValue(initialValue, getValue);

  const [type, setType] = useState(initialType);

  const changeType = () => {
    let newType = type === 'cash' ? 'percent' : 'cash';
    setType(newType);
    getType(newType);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.type}>{type === 'cash' ? '$' : '%'}</span>
      <input
        type="number"
        className={cn(styles.input, controlled && styles.input__controlled)}
        value={value}
        onChange={onChange}
      />

      {controlled && (
        <button className={styles.button} onClick={changeType}>
          <Repeat className={styles.icon} />
        </button>
      )}
    </div>
  );
};

export default InputNumber;
