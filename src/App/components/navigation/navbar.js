import React, { Component } from 'react';

class NavBar extends Component{

    state = {
        task: {
            title: 'Tremendo',
            done: true
        },
        dataApp: {
            appTitle: 'Webpack Config.'
        }
    }

    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <a className="navbar-brand" href="#">{this.state.dataApp.appTitle}</a>

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;