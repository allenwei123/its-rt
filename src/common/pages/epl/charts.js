import React from 'react'
// import { Table, Form, Icon, Input, Button } from 'antd'
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';

class ChartsPage extends React.Component {


    render() {
        const data = [
            { year: '1951 年', sales: 38 },
            { year: '1952 年', sales: 52 },
            { year: '1956 年', sales: 61 },
            { year: '1957 年', sales: 145 },
            { year: '1958 年', sales: 48 },
            { year: '1959 年', sales: 38 },
            { year: '1960 年', sales: 38 },
            { year: '1962 年', sales: 38 },
        ];
        const cols = {
            'sales': { tickInterval: 20, alias: '游戏种类' },
            'year': { alias: '销售量' }
        };
        const title = {
            //autoRotate: true, // 是否需要自动旋转，默认为 true
            //offset: 30, // 设置标题 title 距离坐标轴线的距离
            textStyle: {
                fontSize: '12',
                textAlign: 'center',
                fill: '#3988ff',
                fontWeight: 'bold',
                //   rotate: 0
            }, // 坐标轴文本属性配置
            position: 'center', // 标题的位置，**新增** || 'center' || 'end'
        }
        return (
            <div>
                <Chart height={400} data={data} scale={cols} forceFit>
                    <Axis name="year" />
                    <Axis name="sales" title={title} label={{ offset: 15, textStyle: { textAlign: 'center', fill: '#3988ff' } }} line={{ lineWidth: 1, stroke: 'dddddd', fill: '#ffffff' }} />
                    <Tooltip crosshairs={{ type: "y" }} />
                    <Legend position="right" dy={+20} />
                    <Geom type="interval" position="year*sales" color={['year', '#ff0000-#00ff00']} style={{
                        lineWidth: 2
                    }} />
                    <Geom type="line" position="year*sales" size={2} />
                    <Geom type='point' position="year*sales" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1}} />
                </Chart>
            </div>
        )
    }
}

export default ChartsPage