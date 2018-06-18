import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';

class App extends React.Component {
    render() {
        let LayoutRouter=(
            <Layout>
                <Switch>
                    <Route exact psth='/' component={Home}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/' render={(props) => (
                        LayoutRouter
                    )}/>


                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);