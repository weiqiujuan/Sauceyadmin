import React from 'react';
import './index.scss'
import Mutil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

const mm = new Mutil();
const user = new User();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: mm.getUrlParam('redirect') || '/'
        }
    }

    componentWillMount() {
        document.title = '登录—MAll管理系统'
    }

    onInputKeyup(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    }

    onInputChange(e) {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }

    onSubmit() {
        let loginInfo = {
                username: this.state.username,
                password: this.state.password
            },
            checkResult = user.checkLoginInfo(loginInfo);
        //验证通过
        if (checkResult.status) {
            user.login(loginInfo).then((res) => {
                mm.setStorage('userInfo', res);
                this.props.history.push(this.state.redirect);
            }, (errMsg) => {
                mm.errorTips(errMsg);
            });
        }
        //验证不通过
        else {
            mm.errorTips(checkResult.msg);
        }
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className='panel panel-default login-panel'>
                    <div className="panel-heading">欢迎登录-Mall管理系统</div>
                    <div className='panel-body'>
                        <div>
                            <div className="form-group">
                                <input type="text"
                                       name='username'
                                       className='form-control'
                                       placeholder='请输入用户名'
                                       onKeyUp={e => {
                                           this.onInputKeyup(e)
                                       }}
                                       onChange={e =>
                                           this.onInputChange(e)
                                       }/>
                            </div>
                            <div className="form-group">
                                <input type="password"
                                       name='password'
                                       className='form-control'
                                       placeholder='请输入密码'
                                       onKeyUp={e => {
                                           this.onInputKeyup(e)
                                       }}
                                       onChange={e =>
                                           this.onInputChange(e)
                                       }

                                />
                            </div>
                            <button className='btn btn-lg btn-primary btn-block'
                                onClick={e => {this.onSubmit(e)}}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;

/* onUsernameChange(e) {
     this.setState({
         username: e.target.value
     })
 }

 onPasswordChange(e) {
     this.setState({
         password: e.target.value
     })
 }*/
/*用onInputChange代替*/