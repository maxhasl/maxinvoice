import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Download } from './download.svg';
import { makePdf } from '../../redux/features/make-pdf';
import styles from './make-pdf.module.scss';

const MakePdf = ({ makePdf }) => {
  return (
    <button className={styles.button} onClick={makePdf}>
      <Download className={styles.icon} />
      Download Invoice
    </button>
  );
};

MakePdf.propTypes = {
  makePdf: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  makePdf: () => dispatch(makePdf()),
});

export default connect(null, mapDispatchToProps)(MakePdf);
