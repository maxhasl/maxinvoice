import Currency from '../currency';
import MakePdf from '../make-pdf';

import styles from './aside.module.scss';

const Aside = () => {
  return (
    <aside className={styles.wrap}>
      <div className={styles.currency}>
        <Currency />
      </div>
      <MakePdf />
    </aside>
  );
};

export default Aside;
