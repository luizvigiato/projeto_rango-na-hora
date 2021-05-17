import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


class Logout extends Component {
    constructor(props) {
        super(props)
        const teste = localStorage;
        teste.setItem('token', false);
        console.info(teste.getItem('token'));
    }

    render() {
        return (
            <>
                <Redirect to="/" />
            </>
        );
    }

}

export default Logout;