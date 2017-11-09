import React from 'react';

class Navbar extends React.Component {
    render(){
        var menu = [
            {titulo:"Home",link:"#home"},
            {titulo:"Contato",link:"#contato"},
            {titulo:"Sobre",link:"#sobre"}
        ];
        var lista = menu.map(function(value){
            return (<li key={value.titulo}><a href={value.link}>{value.titulo}</a></li>);
        });
        var corNavBar = "nav-wrapper " + this.props.cor;
        return (
            <nav>
                <div className={corNavBar}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <ul id="nav-mobile" className="right">
                            {lista}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
