import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faMapMarker from '@fortawesome/fontawesome-free-solid/faMapMarker';
import faMoneyBill from '@fortawesome/fontawesome-free-solid/faMoneyBill';
import faEye from '@fortawesome/fontawesome-free-solid/faEye';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';

fontawesome.library.add(faSpinner, faMapMarker, faMoneyBill, faEye, faUsers);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
