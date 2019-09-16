import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to="/perguntas" className="nav-link">Perguntas</Link>
                        <Link to="/respostas" className="nav-link">Respostas</Link>
                        <Link to="/perfil" className="nav-link">Perfil</Link>
                        <Link to="/mensagens" className="nav-link">Mensagens</Link>
                        <Link to="/configuracoes" className="nav-link">Configuracoes</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;