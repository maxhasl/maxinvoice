import { connect } from 'react-redux';
import { setTitle, totalSelector } from '../../redux/features/total';
import styles from './total.module.scss';

const Total = ({ title, total, setTitle }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.title}
        value={title}
        onChange={setTitle}
      />
      <div className={styles.value}>${total.toLocaleString()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  title: state.total.title,
  total: totalSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(setTitle(e.target.value || '')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Total);
