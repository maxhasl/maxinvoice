import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './redux/store';

//dev only!!
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
