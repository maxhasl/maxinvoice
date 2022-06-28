import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';
import { ReactComponent as Download } from './download.svg';
import { ReactComponent as Close } from './close.svg';
import {
  makePdf,
  closeMessage,
  makePdfSelector,
} from '../../redux/features/make-pdf';
import styles from './make-pdf.module.scss';

const MakePdf = ({ status, makePdf, closeMessage }) => {
  return (
    <section>
      <button className={styles.button} onClick={makePdf}>
        <Download className={styles.icon} />
        Download Invoice
      </button>
      {status.done || status.error.value ? (
        <div className={styles.result}>
          {status.done ? <p className={styles.message}>Succes!</p> : null}
          {status.error.value ? (
            <p className={cn(styles.message, styles.message_error)}>
              {status.error.message}
            </p>
          ) : null}
          <button className={styles.close} onClick={closeMessage}>
            <Close className={styles.close__icon} />
          </button>
        </div>
      ) : null}
    </section>
  );
};

MakePdf.propTypes = {
  status: PropTypes.shape({
    done: PropTypes.bool.isRequired,
    error: PropTypes.shape({
      value: PropTypes.bool.isRequired,
      message: PropTypes.string.isRequired,
    }),
  }),
  makePdf: PropTypes.func.isRequired,
  closeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: makePdfSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  makePdf: () => dispatch(makePdf()),
  closeMessage: () => dispatch(closeMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MakePdf);
