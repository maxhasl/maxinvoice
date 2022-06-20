import { useEffect } from 'react';
import Header from '../header';
import Invoice from '../invoice';
import Footer from '../footer';
import Aside from '../aside';
import loadFont from '../../redux/utils/font';

import styles from './app.module.scss';

const App = () => {
  useEffect(() => {
    loadFont();
  }, []);

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
