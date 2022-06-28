import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
import { setTitle, mainTitleSelector } from '../../redux/features/main';

import styles from './title.module.scss';

const Title = ({ title, setTitle }) => {
  const [titleClass, setTitleClass] = useState('valid');

  useEffect(() => {
    title === '' ? setTitleClass('invalid') : setTitleClass('valid');
  }, [title]);

  return (
    <input
      type="text"
      className={
        titleClass === 'valid'
          ? styles.input
          : cn(styles.input, styles.input_required)
      }
      value={title}
      onChange={setTitle}
    />
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  title: mainTitleSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(setTitle(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);
