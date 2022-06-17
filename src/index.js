import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ErrorBoundry from './components/ErrorBoundry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
	<ErrorBoundry>
		<App />
	</ErrorBoundry>
   
//   </React.StrictMode>
);

