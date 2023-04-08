import React from "react";
import axios from "axios";
import styled from "styled-components";

import { InputField } from "./components/InputField/InputField";

import { Main, Window, Topbar, OrangeBall, YellowBall, WhiteBall } from "./Style";
import { UsersGallery } from "./components/UsersGallery/UsersGallery";


import { urlBase, header } from "./Api";
import { EditUser } from "./components/EditUser/EditUser";

export default class App extends React.Component {

    state = {
        currentWindow: 'createUser',

        users: [],

        valueName: '',
        valueEmail: '',

        editId:'',
        valueChangeName: '',
        valueChangeEmail: '',

        valueSearch: ''
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    takeName = (e) => {this.setState({valueName: e.target.value})}
    takeEmail = (e) => {this.setState({valueEmail: e.target.value})}

    changeName = (e) => {this.setState({valueChangeName: e.target.value})}
    changeEmail = (e) => {this.setState({valueChangeEmail: e.target.value})}

    changeSearch = (e) => {this.setState({valueSearch: e.target.value})}

    createUser = () => {
        const body = {
            name: this.state.valueName,
            email: this.state.valueEmail
        }

        axios.post(urlBase, body, header)
        .then((res)=> {
            alert(`Bem vindo ${this.state.valueName}`)
            this.setState({valueName: '',valueEmail:''})
            this.getAllUsers()
        })
        .catch((err) => {
            alert(err.response.data.message)
            this.setState({valueName: '',valueEmail:''})
        })
    }


    getAllUsers = () => {
        axios.get(urlBase, header)
        .then((res) => {
            this.setState({users: res.data})
        })
        .catch((res) => {
            alert('res.response')
        })
    }

    editUser = () => {
        const id = this.state.editId

        const body = {
            name: this.state.valueChangeName,
            email: this.state.valueChangeEmail
        }

        axios.put(`${urlBase}/${id}`, body, header)
        .then((res) => {
            alert(`Usuario ${this.state.valueChangeName} editado com sucesso`)
            this.setState({currentWindow: 'createUser'})
            this.getAllUsers()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    deleteUser = (userId) => {
        if (window.confirm('Tem certeza que deseja apagar o usuário ?')) {
            axios.delete(`${urlBase}/${userId}`, header)
            .then((res) => {
                alert(`Deletado com sucesso`)
                this.getAllUsers()
            })
            .catch((err) => {
                alert(err.response)
            })
        } 
    }

    changeForEdit = (userId) => {
        this.setState({editId: userId})
        this.setState({currentWindow: 'editUser'})
    }

    filtrarUsers = () => {
        const usersFiltrados = this.state.users.filter((user) => {
            return user.name.includes(this.state.valueSearch)
        })

        return usersFiltrados
    }

    render() {

        const usersFiltro = this.filtrarUsers();

        return(
            <Main>
                <Window>
                    <Topbar>
                        <section>
                            <OrangeBall></OrangeBall>
                            <YellowBall></YellowBall>
                            <WhiteBall></WhiteBall>
                        </section>
                        <span>Create User</span>
                    </Topbar>
                    {this.state.currentWindow === 'createUser' ? 
                    <InputField 
                    insertName={this.state.valueName}
                    insertTakeName={this.takeName}

                    insertEmail={this.state.valueEmail}
                    insertTakeEmail={this.takeEmail}

                    reqCreateUser={this.createUser}
                    /> : 
                    <EditUser 
                    changeName={this.state.valueChangeName}
                    changeInsertName={this.changeName}

                    changeEmail={this.state.valueChangeEmail}
                    changeInsertEmail={this.changeEmail}

                    reqEditUser={this.editUser}
                    />
                    }
                </Window>
                <Window>
                    <Topbar>
                        <section>
                            <OrangeBall></OrangeBall>
                            <YellowBall></YellowBall>
                            <WhiteBall></WhiteBall>
                        </section>
                        <section>
                            <input 
                            placeholder="Pesquise aqui"
                            value={this.state.valueSearch}
                            onChange={this.changeSearch}
                            />
                        </section>
                        <span>Users List</span>
                    </Topbar>
                    <UsersGallery 
                    takeUsersList={usersFiltro}
                    userId={this.state.deleteId}
                    clickDelete={this.deleteUser}
                    changePage={this.changeForEdit}
                    />
                </Window>
            </Main>
        )
    }
}