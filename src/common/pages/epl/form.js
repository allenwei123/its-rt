import React from 'react'
import { Form, Input, Button, InputNumber } from 'antd'
import styles from './style.scss';

import { formatchUrl } from '@/common/utils/tools'

const FormItem = Form.Item;

class FormPage extends React.Component {

    state = {
        name: '基础管理',
        number: 0,
        id:''
    }

    componentDidMount() {
        let str = this.props.history.location.search;
        if(str){
            let params = formatchUrl(str);
            this.setState({number:23,id:params.id})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('提交表单测成功')
            }
        });
    }

    validateToNextFloor = (rule, value, callback) => {
        const form = this.props.form;
        if (value && form.getFieldValue('confirm')) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    compareToFirstFloor = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('name')) {
            callback('两次楼栋必须一样');
        } else {
            callback();
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className={styles.formBody} style={{ margin: '0 aut0' }} ref="form">
                <FormItem
                    {...formItemLayout}
                    required
                    label="楼栋名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: '请输入楼栋名称',
                        }, {
                            validator: this.validateToNextFloor,
                        }],
                    })(
                        <Input placeholder='楼栋名称' autoComplete="off" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="楼栋名称1">
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: '请再次输入楼栋名称',
                        }, {
                            validator: this.compareToFirstFloor,
                        }],
                    })(
                        <Input placeholder='楼栋名称' autoComplete="off" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="房间数量">
                    {getFieldDecorator('room', {
                        rules: [{
                            required: true, message: '房间数量为必填',
                        }],
                        initialValue: this.state.number
                    })(
                        <InputNumber
                            min={1}
                            max={100}
                        />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </FormItem>
            </Form>
        )
    }
}
let TradeManagement = Form.create({})(FormPage);
export default TradeManagement;