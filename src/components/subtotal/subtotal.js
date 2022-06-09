import { connect } from 'react-redux';
import { setTitle, subtotalSelector } from '../../redux/features/subtotal';
import styles from './subtotal.module.scss';

const Subtotal = ({ title, subtotal, setTitle }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.title}
        value={title}
        onChange={setTitle}
      />
      <div className={styles.value}>${subtotal.toLocaleString()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  title: state.subtotal.title,
  subtotal: subtotalSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(setTitle(e.target.value || '')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subtotal);
