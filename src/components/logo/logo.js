import { connect } from 'react-redux';
import { setLogo, removeLogo } from '../../redux/features/main';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as Close } from './close.svg';

import styles from './logo.module.scss';

const Logo = ({ placeholder, value, onChange, remove }) => {
  console.log(value);
  return (
    <label className={styles.label}>
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        className={styles.file}
        onChange={onChange}
      />
      {value ? (
        <div className={styles.imgContainer}>
          <button className={styles.remove} onClick={remove}>
            <Close className={styles.removeIcon} />
          </button>
          <img src={value} alt="Logo" className={styles.img} />
        </div>
      ) : (
        <div className={styles.placeholder}>
          <Plus className={styles.plus} /> {placeholder}
        </div>
      )}
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.main.logo.value,
  placeholder: state.main.logo.placeholder,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    console.log(e.target.files.length);
    e.target.files.length
      ? dispatch(setLogo(URL.createObjectURL(e.target.files[0])))
      : dispatch(removeLogo());
  },
  remove: (e) => {
    e.preventDefault();
    dispatch(removeLogo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
