import React from 'react';
import {Link} from 'react-router-dom';
import Mutil from 'util/mm.jsx'
import User from 'service/user-service.jsx'
const mm=new Mutil();
const user=new User();

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:mm.getStorage('userInfo').username||''
        }
    }

   //退出登录
    onLogout() {
        user.logout().then(res=>{
            mm.removeStorage('userInfo');
            this.props.history.push('./login');
        },errMsg=>{
            mm.errorTips(errMsg)
        })
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
                                this.state.username
                                    ? <span>欢迎，{this.state.username}</span>
                                    : <span>欢迎您</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={() => {
                                    this.onLogout()
                                }}>
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