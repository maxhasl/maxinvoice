import { connect } from 'react-redux';
import { number } from '../../redux/features/main';
import styles from './input-number.module.scss';

const InputNumber = ({ number, onChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.addon}>#</div>
      <input
        type="number"
        className={styles.number}
        value={number}
        onChange={onChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  number: state.main.number,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(number(+e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumber);
