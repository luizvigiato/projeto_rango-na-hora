import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


class Token extends Component{
    constructor(props){
        super(props) 
        const teste = localStorage;
        teste.setItem('token',true);
        console.info(teste.getItem('token'));
    }

    render() {
        return(
            <>
                <Redirect to="/" />
            </>
        );
    }

}

export default Token;