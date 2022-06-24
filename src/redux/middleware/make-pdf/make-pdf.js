import jsPDF from 'jspdf';
import template from './template';

const middleware = (store) => (next) => async (action) => {
  if (action.type !== 'makePdf/makePdf') return next(action);

  const { payload, ...rest } = action;

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
