import jsPDF from 'jspdf';
import template from './template';
import { mainTitleSelector } from '../../features/main';
import {
  contactFromSelector,
  contactBillSelector,
} from '../../features/contact';

const middleware = (store) => (next) => (action) => {
  if (action.type !== 'makePdf/makePdf') return next(action);

  const { payload, ...rest } = action;
  const state = store.getState();

  if (
    !mainTitleSelector(state) ||
    !contactFromSelector(state).value ||
    !contactBillSelector(state).title ||
    !contactBillSelector(state).value
  ) {
    return next({
      ...rest,
      payload: {
        ...rest.payload,
        done: false,
        error: true,
      },
    });
  }

  const doc = new jsPDF().setFont('Ubuntu');

  doc.html(template(store.getState()), {
    callback: (doc) => {
      doc.save('a4', { returnPromise: true }).then(
        () =>
          next({
            ...rest,
            payload: {
              ...rest.payload,
              done: true,
              error: false,
            },
          }),
        () =>
          next({
            ...rest,
            payload: {
              ...rest.payload,
              done: false,
              error: true,
            },
          })
      );
    },
    margin: [5, 10, 5, 10],
    width: 190,
    windowWidth: 800,
    autoPaging: 'text',
  });
};

export default middleware;
