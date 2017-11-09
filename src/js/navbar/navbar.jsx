import React from 'react';
import NavMenu from './nav-menu'

class Navbar extends React.Component {
    render(){
        var menu = [
            {titulo:"Home",link:"#home"},
            {titulo:"Contact",link:"#contact"},
            {titulo:"About",link:"#about"}
        ];

        var corNavBar = "nav-wrapper " + this.props.cor;
        return (
            <nav>
                <div className={corNavBar}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <NavMenu menu={menu}/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
