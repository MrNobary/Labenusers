import React from "react";
import axios from "axios";

import { Content } from "./Style";

import { urlBase, header } from "../../Api";

export class InputField extends React.Component {
    render() {
        return(
            <Content>
                    <span>Nome: </span>
                    <input 
                    placeholder="Só o primeiro mesmo."
                    value={this.props.insertName}
                    onChange={this.props.insertTakeName}
                    />

                    <span>Email: </span>
                    <input 
                    placeholder="Não esquece de conferir."
                    value={this.props.insertEmail}
                    onChange={this.props.insertTakeEmail}
                    />
                    
                    <button onClick={this.props.reqCreateUser}><span className="text">Criar Usuário</span><span>Usuario Criado</span></button>
            </Content>
        )
    }
}