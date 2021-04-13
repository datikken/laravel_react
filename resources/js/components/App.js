import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import {YMaps, Map} from 'react-yandex-maps';
import { Provider } from 'react-redux';

import { useSelector } from 'react-redux';

import configureStore from "../store/configureStore";

function App() {
    const user = useSelector((state) => state.user);

    return (
        <div className="container">
            <Navbar/>
            <YMaps>
                <Map className="yndx_map" defaultState={{center: [55.75, 37.57], zoom: 9}}/>
            </YMaps>
        </div>
    );
};

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={configureStore()}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('app')
    );
}
