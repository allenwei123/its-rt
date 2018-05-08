import React from 'react'
import './login.scss'
import { changeToken, changeUid } from '@/store/actions/common'
import { connect } from 'react-redux'
import request from '@/common/utils/axios'

class Login extends React.Component {

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
            request.post('user/signIn', {
                phone: this.state.name,
                pwd: this.state.password
            }).then(res => {
                if(!res.errorCode) {
                    this.props.changeToken(res.data.token)
                    this.props.changeUid(res.data.id)
                    this.props.history.push('/')
                }
            })
        }
    }

    render( ) {
        return (
            <div>
                <div className="bg"></div>
                <div className="login-area">
                    <div className="header"><h2>后台登录</h2></div>
                    <div className="form">
                        <div className="form-item">
                        <input type="text" placeholder="用户名" onChange={this.nameChange} />
                        </div>
                        <div className="form-item">
                        <input type="password" placeholder="密码" onChange={this.pswChange} />
                        </div>
                    </div>
                    <div className="footer">
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
)(Login)



