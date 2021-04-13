import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import {YMaps, Map} from 'react-yandex-maps';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';

import configureStore from "../store/configureStore";

const App = React.memo(() => {
    const user = useSelector((state) => state.user);

    return (
        <div className="container">
            <p>{user.location}</p>
            <Navbar/>
            <YMaps>
                <Map className="yndx_map" defaultState={{center: [55.75, 37.57], zoom: 9}}/>
            </YMaps>
        </div>
    );
});

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
