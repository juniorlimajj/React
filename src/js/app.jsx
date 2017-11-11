import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import Card from './card/card';

let App = (
    <div className="main">
        <Navbar titulo="React" cor="blue"/>
        <div className="container">
            <Titulo />
            <div className="row">
                <div className="col m4">
                    <Card/>
                </div>
                <div className="col m4">
                    <Card/>
                </div>
                <div className="col m4">
                    <Card/>
                </div>
            </div>
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));
