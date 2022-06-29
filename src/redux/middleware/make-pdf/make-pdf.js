import jsPDF from 'jspdf';
import template from './template';
import { mainTitleSelector, mainNumberSelector } from '../../features/main';
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
    !contactBillSelector(state).value
  ) {
    if (!mainTitleSelector(state)) {
      next({
        ...rest,
        type: 'main/setTitle',
        payload: '',
      });
    }

    if (!contactFromSelector(state).value) {
      next({
        ...rest,
        type: 'contact/setFromValue',
        payload: '',
      });
    }

    if (!contactBillSelector(state).value) {
      next({
        ...rest,
        type: 'contact/setBillValue',
        payload: '',
      });
    }

    return next({
      ...rest,
      payload: {
        ...rest.payload,
        done: false,
        error: {
          value: true,
          message: 'Required fields are not filled!',
        },
      },
    });
  }

  const name = `${mainTitleSelector(state)} #${mainNumberSelector(state)}`;
  const doc = new jsPDF().setFont('Ubuntu');

  return doc.html(template(store.getState()), {
    callback: (doc) => {
      doc.save(name, { returnPromise: true }).then(
        () =>
          next({
            ...rest,
            payload: {
              ...rest.payload,
              done: true,
              error: {
                value: false,
                message: '',
              },
            },
          }),
        () =>
          next({
            ...rest,
            payload: {
              ...rest.payload,
              done: false,
              error: {
                value: true,
                message: 'Something going wrong!',
              },
            },
          })
      );
    },
    margin: [20, 10, 20, 10],
    width: 190,
    windowWidth: 800,
    autoPaging: 'text',
  });
};

export default middleware;
