import { connect } from 'react-redux';
import { setTitle, mainTitleSelector } from '../../redux/features/main';

import styles from './title.module.scss';

const InputTitle = ({ title, setTitle }) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={title}
      onChange={setTitle}
    />
  );
};

const mapStateToProps = (state) => ({
  title: mainTitleSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(setTitle(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTitle);
