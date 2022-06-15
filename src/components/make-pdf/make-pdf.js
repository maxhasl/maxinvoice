import { ReactComponent as Download } from './download.svg';
import styles from './make-pdf.module.scss';

const MakePdf = () => {
  return (
    <button className={styles.button}>
      <Download className={styles.icon} />
      Download Invoice
    </button>
  );
};

export default MakePdf;
