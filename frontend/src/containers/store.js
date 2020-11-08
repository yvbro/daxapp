import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

const configureStore = () => {
    const store = compose(
        applyMiddleware(thunk, promiseMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore)(rootReducer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;