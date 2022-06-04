import { connect } from 'react-redux';
import { ReactComponent as Plus } from './plus.svg';
import { add } from '../../../redux/features/list';
import styles from './list-add.module.scss';

const ListAdd = ({ add }) => {
  return (
    <button className={styles.button} onClick={add}>
      <Plus className={styles.icon} />
      Line Item
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  add: (e) => {
    dispatch(add(Date.now()));
  },
});

export default connect(null, mapDispatchToProps)(ListAdd);
