import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routes';
import { AppContainer } from 'react-hot-loader';
//styles
import '../stylesheets/main.scss';

const app = document.getElementById('app');

//ReactDOM.render(<AppRoute />, app);
function renderApp() {
    // We now render `<AppContainer>` instead of our App component. 
    ReactDOM.render(
        <AppContainer>
            <AppRoute />
        </AppContainer>,
        document.getElementById('app')
    );
}

renderApp(); // Renders App on init

if (module.hot) {
    // Renders App every time a change in code happens.
    module.hot.accept('./routes.js', renderApp);
}