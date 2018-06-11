import React from 'react'

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'map',
            map: null
        }
        this.state.width = this.props.width ? this.props.width + 'px' : '100%';
        this.state.height = this.props.height ? this.props.height : 500;
    }

    componentDidMount() {
        this.initMap();
    }


    initMap(){
        try {
            let center = this.props.center ? [this.props.center.lng,this.props.center.lat] : null;
            let map = new window.AMap.Map('container', {
                zoom: 15,//级别
                viewMode: '3D',//使用3D视图
                center: center
            });
            let marker = new window.AMap.Marker({ draggable: true });
            marker.setMap(map);
            this.setState({ map, marker });
            let that = this;
            
            /**
             * 点击map 事件 
             * success 回调一个 clickBack 方法 返回一个data
             * */
            map.on('click', function (e) {
                map.setCenter([e.lnglat.getLng(), e.lnglat.getLat()]);//设置视图中心
                let lng = e.lnglat.getLng();
                let lat = e.lnglat.getLat();
                that.geo(lng,lat,marker);
            })
            /*
            ** 如果没有设置中心点 默认使用高精度定位到所在地理位置  
            ** 获取地址成功 可以设置一个 mapMounted 属性 获取成功之后回调 返回一个data 源
            */
            if (!this.props.center) {
                map.plugin('AMap.Geolocation', function () {
                    let geolocation = new window.AMap.Geolocation({
                        enableHighAccuracy: true,//是否使用高精度定位，默认:true
                        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                        zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    });
                    map.addControl(geolocation);
                    geolocation.getCurrentPosition();
                    window.AMap.event.addListener(geolocation, 'complete', function (data) {
                        let address = data.formattedAddress; //返回地址描述
                        marker.setPosition([data.position.lng, data.position.lat]);//设置标注
                        marker.setTitle(address);//设置标注提示
                        if (that.props.mapMounted) {
                            let r = data.addressComponent;
                            let ru = Object.assign({}, { province: r.province, city: r.city, district: r.district });
                            that.props.mapMounted({ address: address, lng: data.position.lng, lat: data.position.lat, threeCity: ru })
                        }
                    });
                })
            }else {
                that.geo(this.props.center.lng,this.props.center.lat,marker);
            }

        } catch (error) {
            console.log(error)
        }


    }
    /*
    ** 根据经纬度获取 地址描述 三级地区
    */ 
    geo(lng,lat,marker) {
        let that = this;
        window.AMap.service("AMap.Geocoder", function () {
            let geo = new window.AMap.Geocoder();
            geo.getAddress([lng, lat], function (status, result) {//根据经纬度=> 获取地址 => 设置marker
                if (status === 'complete' && result.info === 'OK') {
                    let address = result.regeocode.formattedAddress; //返回地址描述
                    marker.setPosition([lng, lat]);//设置标注
                    marker.setTitle(address);//设置标注提示
                    if (that.props.clickBack) {
                        let r = result.regeocode.addressComponent;
                        let threeCity = Object.assign({}, { province: r.province, city: r.city, district: r.district });
                        that.props.clickBack({ address, lng, lat, threeCity });
                    }
                }
            })
        })
    }

    markerPoint(lng,lat,name) {
        if(lng && lat) {
            this.state.marker.setPosition([lng,lat]);
            this.state.map.setCenter([lng,lat]);
            if(name) {
                this.state.marker.setTitle(name);
            }
        }
        
    }

    searchHandle = (search,currentCity,callback)=> {
        window.AMap.service("AMap.Autocomplete", function () {
            var auto = new window.AMap.Autocomplete({
                city: currentCity
            });
            auto.search(search, function (status, result) {
                if (callback) {
                    callback(result)
                }
            });
        })
    }

    render() {
        return (
            <div>
                <div id="container" style={{ width: this.state.width, height: this.state.height + 'px' }}></div>
            </div>
        )
    }
}

export default Map