import React from 'react'
import { Layout } from 'antd'
import Top from './header/header'
import Aside from './aside/aside'
import MyBrad from './myBread/index'
import { connect } from 'react-redux'
import { asides } from '@/store/actions/aside'
import Mycontent from './content/content'
import { udConfig } from '@/store/actions/aside'

class Container extends React.Component {
    state = {
        name:'body'
    }
    componentDidMount() {
        setTimeout(()=> {
            let obj = {aaa:1, bbb:1, ccc:1, ddd:1, eee:1};
            this.props.udConfig(obj);
        },1000)
    }

    render() {
        return JSON.stringify(this.props.per) !== '{}' ? ( <Layout>
                <Top history={this.props.history} />
                <Layout>
                    <Aside history={this.props.history}/>
                    <Layout style={{ padding: '0 20px 20px' }}>
                        <MyBrad />                                                               
                        <Mycontent />
                    </Layout>
                </Layout>
            </Layout>
        ) :(<div style={{width: '100vw', height: '100vh', backgroundColor: 'rgba(255,255,255,0.2)'}}><img style={{display: 'block',margin: '0 auto'}} src={require("@/assets/image/loading.gif")} alt="图片加载失败" /></div>) 
    }
}

export default connect(
    (state) => ({
        list: state.Asides.list,
        per: state.Asides.config
    }),
    {
        asides,
        udConfig
    }
)(Container)