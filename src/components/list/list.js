import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listAllSelector } from '../../redux/features/list';
import ListAdd from './list-add/list-add';
import ListHeader from './list-header';
import ListItem from './list-item';

const List = ({ entities }) => {
  return (
    <section>
      <ListHeader />
      {entities.map((entity) => (
        <ListItem key={entity.id} id={entity.id} />
      ))}
      <ListAdd />
    </section>
  );
};

List.propTypes = {
  entities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      cost: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  entities: listAllSelector(state),
});

export default connect(mapStateToProps)(List);
