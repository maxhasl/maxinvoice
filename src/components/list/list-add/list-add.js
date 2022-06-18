import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Plus } from './plus.svg';
import { addListItem } from '../../../redux/features/list';

import styles from './list-add.module.scss';

const ListAdd = ({ addListItem }) => {
  return (
    <button className={styles.button} onClick={addListItem}>
      <Plus className={styles.icon} />
      Line Item
    </button>
  );
};

ListAdd.propTypes = {
  addListItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addListItem: () => {
    dispatch(addListItem({ id: Date.now() }));
  },
});

export default connect(null, mapDispatchToProps)(ListAdd);
