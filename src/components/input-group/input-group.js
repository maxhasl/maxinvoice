import cn from 'classnames';
import InputGroupName from './input-group-name';
import InputTextarea from '../input-textarea';
import InputText from '../input-text';

import InputGroupDatepicker from './input-group-datepicker';

import styles from './input-group.module.scss';

const InputGroup = ({
  initialName,
  getName,
  initialValue,
  getValue,
  placeholder,
  type,
  child,
}) => {
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
    </div>
  );
};

export default InputGroup;
