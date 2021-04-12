import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import { YMaps, Map } from 'react-yandex-maps';

function App() {
    return (
        <div className="container">
            <Navbar/>
            <YMaps>
                <Map className="yndx_map" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </YMaps>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
