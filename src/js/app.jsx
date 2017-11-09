import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';

let App = (
    <div className="main">
        <Navbar titulo="React" cor="red"/>
        <div className="container">
            <Titulo />
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));
