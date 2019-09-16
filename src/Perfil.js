import React, { Component } from 'react';

class Perfil extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <h2>Cadastro de usuários</h2>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label for="validationDefault01">Primeiro nome</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Nome" value="Mark" required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="inputPassword6">Senha</label>
                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="validationDefaultUsername">Usuário</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                </div>
                                <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Usuário" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label className="form-check-label" for="invalidCheck2">
                                Concordo com os termos e condições
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

export default Perfil;