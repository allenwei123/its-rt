import React from 'react'
import { Breadcrumb } from 'antd'

export default class Container extends React.Component {
    
    render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>物业管理</Breadcrumb.Item>
                <Breadcrumb.Item>基础管理</Breadcrumb.Item>
                <Breadcrumb.Item>楼栋管理</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}