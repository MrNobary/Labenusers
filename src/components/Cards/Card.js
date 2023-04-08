import React from "react";
import axios from "axios";

import { urlBase, header } from "../../Api";

import { CardContainer, Hero, Bio } from "./Style";

export class Card extends React.Component{
    render() {
        return(
            <CardContainer id={this.props.key}>
                <Hero>
                    <img src="https://img.icons8.com/clouds/256/user.png"/>
                    <button id="delete" onClick={this.props.deleteButton}>x</button>
                </Hero>
                <Bio>
                    <label><h3>{this.props.name}</h3><img onClick={this.props.changeForEdit} src="https://img.icons8.com/material-outlined/256/edit-row.png"/></label>
                    <p>{this.props.email}</p>
                </Bio>
            </CardContainer>
        )
    }
}