import cn from 'classnames';
import Contact from '../contact';
import Details from '../details/details';
import InputFile from '../input-file';
import InputNumber from '../input-number';
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
            <Contact />
          </div>
          <div className={cn(styles.form__col, styles.form__col_rtl)}>
            <div className={styles.form__title}>
              <InputTitle />
            </div>
            <div className={styles.form__number}>
              <InputNumber />
            </div>
            <Details />
          </div>
        </form>
        <div>Buttons here</div>
      </div>
    </section>
  );
};

export default Invoice;
