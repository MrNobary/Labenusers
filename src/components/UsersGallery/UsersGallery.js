import React from "react";
import axios from "axios";
import { Card } from "../Cards/Card";
import { Content } from "./Style";

import { urlBase, header } from "../../Api";

export class UsersGallery extends React.Component {

    render() {

        const renderUsers = this.props.takeUsersList.map((user) => {
            return <Card key={user.id}
                    name={user.name}
                    email={user.email}
                    deleteButton={()=> this.props.clickDelete(user.id)}
                    changeForEdit={()=> this.props.changePage(user.id)}
                    />
        })

        return(
            <Content>
                {renderUsers}
            </Content>
        )
    }
}