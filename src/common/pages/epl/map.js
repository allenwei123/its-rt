import React from 'react'
import { Select } from 'antd';
import Map from '@/common/components/Map'

const Option = Select.Option;
let timer;
class MapPage extends React.Component {

    state = {
        addressOption:[]
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    click = (a) => {
        console.log(a)
    }
    mapMounted = (data) => {
        console.log(data);
    }
    change = (val) => {
       if(val && this.state.addressOption.length){
        let o = this.state.addressOption.find(item => item.name === val);
        if(o){
            let { lng, lat } = o.location;
            let name = o.name;
            this.refs.map.markerPoint(lng,lat,name);
        }
       }
    }
    handleFilter = (val) => {
        let that = this;
        clearTimeout(timer);
        if (val !== "") {
            timer = setTimeout(()=> {
                this.refs.map.searchHandle(val,'广州市',(result)=> {
                    if(!result.tips)return;
                    that.setState({addressOption:result.tips})
                })
            },1000);
        }
    }

    render() {
        return (
            <div>
                <Select 
                    style={{ width: 200,marginBottom: 20 }} 
                    mode="combobox"
                    labelInValue={false}
                    filterOption={false} 
                    onSearch={this.handleFilter}  
                    onChange={this.change}>
                    {
                        this.state.addressOption.map((item,idex) => (
                            <Option value={item.name} key={idex}>{item.name}</Option>
                        ))
                    }
                </Select>
                <Map height={500} center={{lng:113.320726,lat:23.12805}} clickBack={this.click} mapMounted={this.mapMounted} ref="map"/>
            </div>
        )
    }
}

export default MapPage