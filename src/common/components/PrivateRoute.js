/**
 * Created by DELL on 2018/5/30.
 */
import React from 'react';
import { Route,withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { ChangeNav } from '@/store/actions/nav'//改变 面包屑


//私有路由，只有登录的用户才能访问
class PrivateRoute extends React.Component{

    componentWillMount(){
        let  isAuthenticated =  localStorage.getItem("token") ? true :false;
        this.setState({isAuthenticated:isAuthenticated});
        this.props.ChangeNav(this.props.bread);
        if(!isAuthenticated){
            const {history} = this.props;
            setTimeout(() => {
                history.replace("/login");
            }, 1000)
        }
    }
    render(){
        let { component: Component,path="/",exact=false,strict=false, show, per } = this.props;
        return this.state.isAuthenticated && per[show] ? (
            <Route  path={path} exact={exact}  strict={strict}  render={(props)=>( <Component {...props} /> )} />
        ) : ("请重新登录");
    }
}
PrivateRoute.propTypes  ={
    path:PropTypes.string.isRequired,
    exact:PropTypes.bool,
    strict:PropTypes.bool,
    component:PropTypes.func.isRequired
}

export default withRouter(connect((state)=>(
    { per: state.Asides.config } ),
    { ChangeNav })(PrivateRoute));