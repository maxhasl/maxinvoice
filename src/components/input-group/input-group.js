import styles from './input-group.module.scss';
import InputGroupName from './input-group-name';
import InputTextarea from '../input-textarea';

const InputGroup = ({ defaultName }) => {
  return (
    <div>
      <InputGroupName defaultName={defaultName} />
      <InputTextarea />
    </div>
  );
};

export default InputGroup;
