import React from 'react'
import './login.scss'
import { changeToken, changeUid } from '@/store/actions/common'
import { connect } from 'react-redux'
import { login } from '@/service/user'
import style from './login.scss'

class LoginPage extends React.Component {

    state = {
        name : null,
        password: null
    }

    nameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    pswChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    login = () => {
        if(this.state.name && this.state.password) {
            login({
                phone: this.state.name,
                pwd: this.state.password
            }).then(res => {
                if(!res.errorCode) {
                    localStorage.setItem('token',res.data.token);
                    localStorage.setItem('userInfo',JSON.stringify(res.data));
                    this.props.changeToken(res.data.token);
                    this.props.changeUid(res.data.id);
                    this.props.history.push('/')
                }
            })
        }
    }

    render( ) {
        return (
            <div>
                <div className={ style.bg }></div>
                <div className={ style['login-area'] }>
                    <div className={ style["header"] }><h2>后台登录</h2></div>
                    <div className={ style["form"] }>
                        <div className={ style["form-item"] }>
                            <input type="text" placeholder="用户名" onChange={this.nameChange} />
                        </div>
                        <div className={ style["form-item"] }>
                            <input type="password" placeholder="密码" onChange={this.pswChange} />
                        </div>
                    </div>
                    <div className={ style["footer"] }>
                        <button type="button" onClick={()=> this.login()}>登 录</button>
                    </div>
                </div>
            </div>
        )
    }
 }


 export default connect(
    (state) => ({
        token: state.Test.token
    }),
    {
        changeToken,
        changeUid
    }
)(LoginPage)



