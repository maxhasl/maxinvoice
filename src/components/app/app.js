import Header from '../header';
import Invoice from '../invoice';
import Footer from '../footer';

import styles from './app.module.scss';

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrap}>
        <main className={styles.main}>
          <Invoice />
          <div>Buttons</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
