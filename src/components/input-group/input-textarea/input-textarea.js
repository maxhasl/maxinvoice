import PropTypes from 'prop-types';
import cn from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './input-textarea.module.scss';
import { useEffect, useState } from 'react';

const InputTextarea = ({ initialValue, getValue, placeholder, required }) => {
  const [inputClass, setInputClass] = useState('valid');

  useEffect(() => {
    if (required)
      initialValue === '' ? setInputClass('invalid') : setInputClass('valid');
  }, [required, initialValue]);

  return (
    <TextareaAutosize
      className={
        inputClass === 'valid'
          ? styles.textarea
          : cn(styles.textarea, styles.textarea_required)
      }
      placeholder={placeholder}
      value={initialValue}
      onChange={(e) => getValue(e.target.value)}
    />
  );
};

InputTextarea.propTypes = {
  initialValue: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
};

export default InputTextarea;
