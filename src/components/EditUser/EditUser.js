import React from "react";
import axios from "axios";

import { Content } from "./Style";

export class EditUser extends React.Component {
    render() {
        return(
            <Content>
                <span>Novo Nome: </span>
                <input 
                placeholder="Só o primeiro mesmo."
                value={this.props.changeName}
                onChange={this.props.changeInsertName}
                />

                <span>Novo Email: </span>
                <input 
                placeholder="Não esquece de conferir."
                value={this.props.changeEmail}
                onChange={this.props.changeInsertEmail}
                />
                
                <button onClick={this.props.reqEditUser}><span className="text">Editar Usuário</span><span>Usuário Editado</span></button>
            </Content>
        )
    }
}