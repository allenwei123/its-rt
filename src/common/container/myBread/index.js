import React from 'react'
import { Breadcrumb } from 'antd'
import { connect } from 'react-redux'

class MyBread extends React.Component {
    
    render() {
        return (
            <Breadcrumb style={{ padding: '16px 20px',backgroundColor: '#fff',margin: '0 -20px 20px' }}>
                { 
                   (this.props.breadData) 
                   ? this.props.breadData.map(item => (
                    <Breadcrumb.Item key={item.name}> { item.name } </Breadcrumb.Item>
                )) : null }
            </Breadcrumb>
        )
    }
}

export default connect(
    (state) => ({
        breadData: state.Nav.navData
    }),
    {}
)(MyBread)