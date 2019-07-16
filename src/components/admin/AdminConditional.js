import React from 'react'
import { AuthConsumer } from '../../contextAuth'
import Admin from './Admin'
import Login from '../login/LoginPage'

function ConditionnalLogged(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <Admin />;
    }
    return <Login />;
}

export default function AdminConditional() {
    return (
        <AuthConsumer>
            {AuthValue => {
                return (
                    <ConditionnalLogged isLoggedIn={AuthValue.isAuthenticated} />
                )
            }}
        </AuthConsumer>
    )
}
