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

export default InputGroupName;
