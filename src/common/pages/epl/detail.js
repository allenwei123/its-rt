import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import styles from './style.scss';

class DetailPage extends React.Component {

    state = {
        detailData:[
            {
                id: 0,
                label: '商家名称',
                value: '阿里八八'
            },
            {
                id: 1,
                label: '地理位置',
                value: '广东省广州市越秀区'
            },
            {
                id: 2,
                label: '标签',
                value: '美食/烧烤'
            },
            {
                id: 3,
                label: '商家优惠券',
                value: '可用'
            },
            {
                id: 4,
                label: '图片',
                value: 'http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png'
            }
        ]
    }

    render() {
        return (
            <div className={styles.formBody}>
                <Row type="flex" justify="center" gutter={12} >
                    {
                        this.state.detailData.map(item => (
                            <Col span={24} className={styles.c_item} key={item.id}>
                                <span className={styles.c_label}>{ item.label }:</span>
                                {
                                    item.value.indexOf('http') < 0 ? (<span className={styles.c_input}>{ item.value }</span>) : <img className={styles.detailImg} src={item.value} alt="" />
                                }
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        test: state.Test.name
    }),
    {}
)(DetailPage)