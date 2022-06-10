import cn from 'classnames';
import Contact from '../contact';
import Details from '../details/details';
import Logo from '../logo';
import Number from '../number';
import InputTitle from '../input-title';
import List from '../list';
import Description from '../description/description';
import Subtotal from '../subtotal';
import Addons from '../addons';

import styles from './invoice.module.scss';

const Invoice = () => {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.form__row}>
            <div className={styles.form__col}>
              <div className={styles.form__logo}>
                <Logo />
              </div>
              <Contact />
            </div>
            <div className={cn(styles.form__col, styles.form__col_rtl)}>
              <div className={styles.form__title}>
                <InputTitle />
              </div>
              <div className={styles.form__number}>
                <Number />
              </div>
              <Details />
            </div>
          </div>
          <div className={styles.form__row}>
            <List />
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__col}>
              <Description />
            </div>
            <div className={cn(styles.form__col, styles.form__col_rtl)}>
              <Subtotal />
              <Addons />
            </div>
          </div>
        </div>
        <div>Buttons here</div>
      </div>
    </section>
  );
};

export default Invoice;
