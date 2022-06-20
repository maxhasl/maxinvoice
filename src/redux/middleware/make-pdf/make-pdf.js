import jsPDF from 'jspdf';
import template from './template';

const middleware = (store) => (next) => async (action) => {
  if (action.type !== 'makePdf/makePdf') return next(action);

  const { payload, ...rest } = action;

  try {
    const doc = new jsPDF().setFont('Ubuntu');

    doc.html(template(store.getState()), {
      callback: (doc) => {
        doc.save('a4.pdf');
        next({
          ...rest,
          payload: {
            ...rest.payload,
            done: true,
            error: false,
            process: false,
          },
        });
      },
      margin: [5, 10, 5, 10],
      width: 190,
      windowWidth: 800,
      autoPaging: 'text',
    });
  } catch (error) {
    next({
      ...rest,
      payload: {
        ...rest.payload,
        done: false,
        error: true,
        process: false,
      },
    });
  }
};

export default middleware;
