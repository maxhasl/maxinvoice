import cn from 'classnames';
import InputFile from '../input-file';
import InputGroup from '../input-group';
import InputNumber from '../input-number';
import InputTextarea from '../input-textarea';
import InputTitle from '../input-title';
import styles from './invoice.module.scss';

const Invoice = () => {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.form__col}>
            <div className={styles.form__logo}>
              <InputFile />
            </div>
            <div className={styles.form__area_m}>
              <InputTextarea placeholder="Who is this invoice from? (required)" />
            </div>
            <div className={styles.form__row_s}>
              <div className={styles.form__col}>
                <InputGroup defaultName="Bill To" type="col" child="textarea" />
              </div>
              <div className={styles.form__col}>
                <InputGroup defaultName="Ship To" type="col" child="textarea" />
              </div>
            </div>
          </div>
          <div className={cn(styles.form__col, styles.form__col_rtl)}>
            <div className={styles.form__title}>
              <InputTitle defaultValue="INVOICE" />
            </div>
            <div className={styles.form__number}>
              <InputNumber defaultValue="1" />
            </div>
            <div className={styles.form__details}>
              <InputGroup defaultName="Date" type="row" child="date" />
              <InputGroup defaultName="Payment Terms" type="row" child="text" />
              <InputGroup defaultName="Due Date" type="row" child="date" />
              <InputGroup defaultName="PO Number" type="row" child="text" />
            </div>
          </div>
        </form>
        <div>Buttons here</div>
      </div>
    </section>
  );
};

export default Invoice;
