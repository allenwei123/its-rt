import React from 'react'
import { Table ,Form ,Icon, Input } from 'antd'
import { connect } from 'react-redux'
import { test as ChangeTest } from '@/store/actions/common'
import request from '@/common/utils/axios'

const FormItem = Form.Item;

class BaseManage extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        name : '基础管理',
        columns : [
            { title: '名称', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
            { title: '性别', dataIndex: 'sex', key: '9' },
            { title: '年龄', dataIndex: 'age', key: '10' },
            { title: '号码', dataIndex: 'address', key: '11' },
            { title: '分组1', dataIndex: 'address', key: '2' },
            { title: '分组2', dataIndex: 'address', key: '3' },
            { title: '分组3', dataIndex: 'address', key: '4' },
            { title: '分组4', dataIndex: 'address', key: '5' },
            { title: '分组5', dataIndex: 'address', key: '6' },
            { title: '分组6', dataIndex: 'address', key: '7' },
            { title: '分组7', dataIndex: 'address', key: '8' },
            {
              title: 'Action',
              key: 'operation',
              fixed: 'right',
              width: 100,
              render: (row) => {
                let html;
                if(row.btn === 1) {
                    html = (
                        <a href="javascript:;">删除</a>
                    )
                }else {
                    html = (
                        <a href="javascript:;">编辑</a>
                    )
                }
                return html
            },
            },
          ],
          data : [{
            key: '1',
            name: 'John Brown',
            sex:'男',
            age: 32,
            address: 'New York Park',
            btn: 1
          }, {
            key: '2',
            name: 'Jim Green',
            sex:'女',
            age: 40,
            address: 'London Park',
            btn: 2
          }],
          isLoading: true,
          current: 1,
          pageSize: 2
    }

    componentDidMount() {
        request.get('statistics/5a82adf3b06c97e0cd6c0f3d/room')
            .then(res => {
                console.log(res)
            })
        setTimeout(() => {
            if(this.refs.myRef) {
                this.setState({
                    isLoading: false
                })
            }
        }, 1000);
    }

    change = (value) => {
        this.props.ChangeTest(value)
    }

    getVal = () => {
        console.log(this.props.test)
    }

    pageChange = (page,pageSize)=> {
        this.setState({
            data: [{
                key: '1',
                name: '刘亦菲',
                sex:'女',
                age: page,
                address: '13738903938',
                btn: 1
              }, {
                key: '3',
                name: '刘岩',
                sex:'女',
                age: 40,
                address: 'London Park',
                btn: 2
              }],
              current: page
        })
    }

    render() {

        return (
            <div ref="myRef">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="搜素名字" />
                </FormItem>
                </Form>
                <Table 
                    columns={this.state.columns} 
                    dataSource={this.state.data}
                    loading={this.state.isLoading }
                    scroll={{ x: 1300 }}
                    bordered={true}
                    size='small'
                    pagination={{
                        current: this.state.current,
                        pageSize: this.state.pageSize,
                        total: 12,
                        onChange: this.pageChange
                    }} 
                />
                <button onClick={()=> this.change('allen') }>改变test值</button>
                <div>{ this.props.test } </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        test: state.Test.name
    }),
    {
        ChangeTest
    }
)(BaseManage)