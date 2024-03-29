import PropTypes from 'prop-types';
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
        data-testid="add-logo"
      />
      {logo.value ? (
        <div className={styles.imgContainer} data-testid="img-wrap">
          <button
            className={styles.remove}
            onClick={remove}
            data-testid="remove-btn"
          >
            <Close className={styles.removeIcon} />
          </button>
          <img src={logo.value} alt="Logo" className={styles.img} />
        </div>
      ) : (
        <div className={styles.placeholder} data-testid="add-btn">
          <Plus className={styles.plus} /> {logo.placeholder}
        </div>
      )}
    </label>
  );
};

Logo.propTypes = {
  logo: PropTypes.objectOf(PropTypes.string.isRequired),
  onChange: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logo: mainLogoSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => dispatch(setLogo(evt.target.result));
    } else {
      dispatch(removeLogo());
    }

    e.target.value = null;
  },
  remove: (e) => {
    e.preventDefault();
    dispatch(removeLogo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
