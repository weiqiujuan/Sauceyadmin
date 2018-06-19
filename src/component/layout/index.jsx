import React from 'react';
import SideNav from 'component/nav-side/index.jsx';
import TopNav from 'component/nav-top/index.jsx';
import './theme.css';
import './index.scss'

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='wrapper'>
                <TopNav/>
                <SideNav/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;