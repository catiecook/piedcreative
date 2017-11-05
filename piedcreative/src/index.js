import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

//This tells the app to import the routes
import Routes from './routes';

ReactDOM.render(<Routes history={browserHistory} />,
 document.getElementById('root')
);
