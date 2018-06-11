import React from 'react'
import { Chart, Axis, Geom, Tooltip, Legend, Coord, Label } from 'bizcharts';
import { View } from '@antv/data-set';

const dv = new View();

class ChartsPage extends React.Component {

    render() {
        const data = [
            { item: '事例一', count: 40 },
            { item: '事例二', count: 21 },
            { item: '事例三', count: 17 },
            { item: '事例四', count: 13 },
            { item: '事例五', count: 9 }
        ];
        dv.source(data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = (val * 100) + '%';
                    return val;
                }
            }
        }
        return (
            <div>
                <Chart height={400} data={dv} scale={cols} forceFit>
                    <Coord type='theta' radius={0.75} />
                    <Axis name="percent" />
                    <Tooltip
                        showTitle={false}
                        g2-tooltip={{
                            position: 'absolute',
                            visibility: 'hidden',
                            border : '1px solid #efefef',
                            backgroundColor: 'white',
                            color: '#3988ff',
                            opacity: "0.8",
                            padding: '5px 15px',
                            'transition': 'top 200ms,left 200ms'
                          }}
                    />
                    <Legend position='right' offsetX={-100} />
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color='item'
                        tooltip={['item*percent', (item, percent) => {
                            percent = percent * 100 + '%';
                            return {
                                name: item,
                                value: percent
                            };
                        }]}
                        style={{ lineWidth: 1, stroke: '#fff' }}
                    >
                        <Label content='percent' formatter={(val, item) => {
                            return item.point.item + ': ' + val ;
                        }} />
                    </Geom>
                </Chart>
            </div>
        )
    }
}

export default ChartsPage