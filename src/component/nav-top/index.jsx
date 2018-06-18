import React from 'react';
import {Link} from 'react-router-dom';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
    }
//退出登陆
    onLogout(){

    }
    render() {
        return (
            <div className='navbar navbar-default top-navbar'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' to='/'>
                       <b>HappyMall</b>
                    </Link>
                </div>
                <ul className='nav navbar-top-links navbar-right'>
                    <li className='dropdown'>
                        <a href="javascript:;" className='dropdown-toggle'>
                            <i className='fa fa-user fa-fw'></i>
                            {

                            }
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={()=>{this.onLogout()}} >
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopNav;