import { connect } from 'react-redux';
import {
  setLogo,
  removeLogo,
  mainLogoSelector,
} from '../../redux/features/main';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as Close } from './close.svg';

import styles from './logo.module.scss';

const Logo = ({ logo, onChange, remove }) => {
  return (
    <label className={styles.label}>
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        className={styles.file}
        onChange={onChange}
      />
      {logo.value ? (
        <div className={styles.imgContainer}>
          <button className={styles.remove} onClick={remove}>
            <Close className={styles.removeIcon} />
          </button>
          <img src={logo.value} alt="Logo" className={styles.img} />
        </div>
      ) : (
        <div className={styles.placeholder}>
          <Plus className={styles.plus} /> {logo.placeholder}
        </div>
      )}
    </label>
  );
};

const mapStateToProps = (state) => ({
  logo: mainLogoSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    e.target.files.length
      ? dispatch(setLogo(URL.createObjectURL(e.target.files[0])))
      : dispatch(removeLogo());

    e.target.value = null;
  },
  remove: (e) => {
    e.preventDefault();
    dispatch(removeLogo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
