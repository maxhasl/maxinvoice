import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listAllSelector } from '../../redux/features/list';
import ListAdd from './list-add/list-add';
import ListHeader from './list-header';
import ListItem from './list-item';

import styles from './list.module.scss';

const List = ({ entities }) => {
  return (
    <div className={styles.wrap}>
      <ListHeader />
      {entities.map((entity) => (
        <ListItem key={entity.id} id={entity.id} />
      ))}
      <ListAdd />
    </div>
  );
};

List.propTypes = {
  entities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      cost: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  entities: listAllSelector(state),
});

export default connect(mapStateToProps)(List);
