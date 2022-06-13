import cn from 'classnames';
import { ReactComponent as Close } from './close.svg';
import InputGroupName from './input-group-name';
import InputTextarea from './input-textarea';
import InputText from './input-text';
import InputNumber from './input-number';

import InputGroupDatepicker from './input-group-datepicker';

import styles from './input-group.module.scss';

const InputGroup = ({
  initialName,
  getName,
  initialValue,
  getValue,
  initialType,
  getType,
  placeholder,
  visible = true,
  close = false,
  setClose,
  controlled,
  type,
  child,
}) => {
  if (!visible) return null;

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
      case 'number':
        return (
          <InputNumber
            initialValue={initialValue}
            getValue={getValue}
            initialType={initialType}
            getType={getType}
            visible={visible}
            controlled={controlled}
          />
        );
      case 'date':
        return (
          <InputGroupDatepicker
            initialValue={initialValue}
            getValue={getValue}
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
      {close && (
        <button className={styles.remove} onClick={setClose}>
          <Close className={styles.icon} />
        </button>
      )}
    </div>
  );
};

export default InputGroup;
