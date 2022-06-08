import { connect } from 'react-redux';
import { ListAllSelector } from '../../redux/features/list';
import ListAdd from './list-add/list-add';
import ListHeader from './list-header';
import ListItem from './list-item/list-item';
import styles from './list.module.scss';

const List = ({ entities, add }) => {
  return (
    <div className={styles.list}>
      <ListHeader onClick={add} />
      {entities.map((entity) => (
        <ListItem key={entity.id} id={entity.id} />
      ))}
      <ListAdd />
    </div>
  );
};

const mapStateToProps = (state) => ({
  entities: ListAllSelector(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);
