import PropTypes from 'prop-types';
import useValue from '../../../hooks/use-value';
import styles from './input-group-name.module.scss';

const InputGroupName = ({ initialName, getName }) => {
  const { value, onChange } = useValue(initialName, getName);

  return (
    <input
      type="text"
      className={styles.title}
      value={value}
      onChange={onChange}
    />
  );
};

InputGroupName.propTypes = {
  initialName: PropTypes.string.isRequired,
  getName: PropTypes.func.isRequired,
};

export default InputGroupName;
