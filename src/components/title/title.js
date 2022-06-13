import { connect } from 'react-redux';
import { setTitle } from '../../redux/features/main';

import styles from './title.module.scss';

const InputTitle = ({ title, setTitle }) => {
  return (
    <input
      type="text"
      className={styles.title}
      value={title}
      onChange={setTitle}
    />
  );
};

const mapStateToProps = (state) => ({
  title: state.main.title,
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(setTitle(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTitle);
