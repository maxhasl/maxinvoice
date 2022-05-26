import { connect } from 'react-redux';
import { setTitleAction } from '../../redux/actions';
import styles from './input-title.module.scss';

const InputTitle = ({ title, onChange }) => {
  return (
    <input
      type="text"
      className={styles.title}
      value={title}
      onChange={onChange}
    />
  );
};

const mapStateToProps = (state) => ({
  title: state.main.title
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(setTitleAction(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputTitle);
