import { connect } from 'react-redux';
import jsPDF from 'jspdf';
import { ReactComponent as Download } from './download.svg';
import template from './template';
import styles from './make-pdf.module.scss';

const MakePdf = ({ state }) => {
  const doc = new jsPDF();

  const download = () => {
    const html = template(state);

    doc.html(html, {
      callback: (doc) => doc.save('a4.pdf'),
      margin: [5, 10, 5, 10],
      width: 190,
      windowWidth: 800,
      autoPaging: 'text',
    });
  };

  return (
    <button className={styles.button} onClick={download}>
      <Download className={styles.icon} />
      Download Invoice
    </button>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(MakePdf);
