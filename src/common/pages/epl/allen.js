import React from 'react'
import { connect } from 'react-redux'
import { Table, Form, Icon, Input, Button } from 'antd'
import  { communityList } from '@/service/common'

import { sendUrl as createUrl } from '@/common/utils/tools'

const FormItem = Form.Item;

class TestPage extends React.Component {

    state = {
        name: '基础管理',
        columns: [
            { title: '楼栋名称', dataIndex: 'name', key: 'name' },
            { title: '楼面层数', dataIndex: 'overGround', key: '9',render: value => value || 0  },
            { title: '地下层数', dataIndex: 'underGround', key: '10',render: value => value || 0  },
            { title: '总层数', dataIndex: 'overGround', key: '11',render: value => value || 0  },
            { title: '房间数量', dataIndex: 'roomNum', key: '2' ,render: value => value || 0 },
            { title: '已录入房间数', dataIndex: 'inputRoomNum', key: '3' ,render: value => value || 0 },
            {
                title: '开发状态', dataIndex: 'open', key: '4', render: (value) => (
                    value ? '已开放' : '未开放'
                )
            },
            {
                title: '操作',
                key: 'operation',
                fixed: 'right',
                width: 100,
                render: (row) => {
                    let html;
                    if (row.btn === 1) {
                        html = (
                            <span>删除</span>
                        )
                    } else {
                        html = (
                            <div>
                                <span style={{cursor: 'pointer'}} onClick={()=> this.detail(row)}>详情</span>
                                <span style={{cursor: 'pointer',marginLeft:'10px'}} onClick={()=> this.edit(row)}>编辑</span>
                            </div>
                        )
                    }
                    return html
                },
            },
        ],
        tableData: [],
        isLoading: true,
        currentPage: 1,
        pageSize: 10,
        total: 0
    }

    componentDidMount() {
        this.initTableData();
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    initTableData() {
        communityList({ params: { page: this.state.currentPage, communityId: '5a82adf3b06c97e0cd6c0f3d' } })
            .then(res => {
                if (!res.errorCode) {
                    this.setState({
                        tableData: res.data.records.map((item, index) => {
                            item.key = index;
                            return item;
                        }),
                        isLoading: false,
                        total: res.data.total
                    })
                }
            });
    }

    pageChange = async (page, pageSize) => {
       await this.setStateAsync({
            currentPage: page,
            isLoading: true
        })
        this.initTableData();
    }

    add = ()=> {
        this.props.history.push({pathname:'/home/allen/form'})
    }

    edit = (row)=> {
        this.props.history.push({pathname:'/home/allen/form',search: createUrl({id: row.id }) })
    }

    detail = (row) => {
        this.props.history.push({pathname:'/home/allen/detail',search: createUrl({id: row.id }) })
    }


    render() {
        return (
            <div>
                <Form layout="inline" onSubmit={this.handleSubmit} style={{marginBottom: '20px'}}>
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="搜素名字" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" size="small" >查询</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" onClick={ ()=> this.add() } size="small" >新增</Button>
                    </FormItem>
                </Form>
                <Table
                    columns={ this.state.columns }
                    dataSource={ this.state.tableData }
                    loading={ this.state.isLoading }
                    scroll={{ x: 1300 }}
                    bordered={true}
                    size='small'
                    pagination={{
                        showQuickJumper:true,
                        current: this.state.currentPage,
                        pageSize: this.state.pageSize,
                        total: this.state.total,
                        onChange: this.pageChange,
                        showTotal: total => (`共${total}条`)
                    }}
                />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        test: state.Test.name
    }),
    {}
)(TestPage)