import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'

function App() {
    return (
        <div className="container">
            <Navbar/>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
