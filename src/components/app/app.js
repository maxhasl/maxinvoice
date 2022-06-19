import Header from '../header';
import Invoice from '../invoice';
import Footer from '../footer';
import Aside from '../aside';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.wrap}>
        <Invoice />
        <Aside />
      </div>
      <Footer />
    </div>
  );
};

export default App;
