import React, { Component } from 'react'

class Conteudo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div class="input-group">
                                    <h4>Dê um título da pergunta</h4>
                                </div>
                                <div class="input-group">
                                    <input type="text" class="form-control" aria-label="Quantia em Dollar (com ponto e duas casas decimais)" />
                                </div>
                                <h4 className="card-title">Faça a pergunta </h4>
                                <div class="form-group">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <select class="form-control-lg">
                                    <p className="card-text">Escolha a #tag da pergunta</p>
                                    <option className="text-primary">#React JS</option>
                                    <option className="text-success">#Node JS</option>
                                    <option className="text-info">#React Native</option>
                                    <option className="text-danger">#Angular</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-primary">#React</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-success">#NodeJS</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-info">#React Native</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-danger">#Angular</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-primary">#React</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-success">#NodeJS</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-info">#React Native</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-danger">#Angular</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Conteudo;