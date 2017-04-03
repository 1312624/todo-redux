import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routes';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './Reducers/rootReducers';

//styles
import '../stylesheets/main.scss';

const app = document.getElementById('app');


const initialState = {};
//create store
const store = createStore(rootReducers, initialState);

const renderApp = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <AppRoute />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
}

renderApp(); // Renders App on init

if (module.hot) {
    // Renders App every time a change in code happens.
    module.hot.accept('./routes.js', renderApp);
}