import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
                <a className="navbar-brand text-primary" href="#"><h3>Meu Sistema</h3></a>
            </nav>
        )
    }
}

export default Navbar;