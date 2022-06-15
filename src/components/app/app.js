import Header from '../header';
import Invoice from '../invoice';
import Footer from '../footer';
import Aside from '../aside';

import styles from './app.module.scss';

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrap}>
        <main className={styles.main}>
          <Invoice />
          <Aside />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
