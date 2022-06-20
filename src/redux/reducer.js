import main from './features/main';
import contact from './features/contact';
import details from './features/details';
import list from './features/list';
import description from './features/description';
import totals from './features/totals';
import addons from './features/addons';
import paid from './features/paid';
import currency from './features/currency';
import makePdf from './features/make-pdf';

const reducer = {
  main,
  contact,
  details,
  list,
  description,
  totals,
  addons,
  paid,
  currency,
  makePdf,
};

export default reducer;
