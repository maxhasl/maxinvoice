import PropTypes from 'prop-types';
import useValue from '../../../hooks/use-value';
import styles from './input-text.module.scss';

const InputText = ({ initialValue, getValue }) => {
  const { value, onChange } = useValue(initialValue, getValue);

  return (
    <div className={styles.wrap}>
      <input
        type="text"
        className={styles.text}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputText.propTypes = {
  initialValue: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
};

export default InputText;
