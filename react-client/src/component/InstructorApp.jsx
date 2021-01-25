import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import LoginComponent from './login/LoginComponent';
import LogoutComponent from './logout/LogoutComponent';
import MenuComponent from './menu/MenuComponent';
import AuthenticatedRoute from './authentication/AuthenticatedRoute';

class InstructorApp extends Component {

    render() {
        return (
            <>
                <Router>
                    <>
                        <Switch>
                            <AuthenticatedRoute path="/" exact component={MenuComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/logout" exact component={LogoutComponent} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default InstructorApp