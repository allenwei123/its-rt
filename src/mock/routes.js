import Base from 'pages/baseManage'
import Epl from 'pages/epl'
import TestPage from 'pages/epl/allen'
import FormPage from 'pages/epl/form'
import DetailPage from 'pages/epl/detail'
import ChartsPage from 'pages/epl/charts'
import PiePage from 'pages/epl/pie'
import MapPage from 'pages/epl/map'

let routes = [
    {
        path: "/home/base",
        parentName:'基础管理',
        show: 'aaa',
        component: Base,
        bread:[{name:'首页'},{name:'基础管理'},{name:'楼栋管理'}]
    },
    {
        path: "/home/epl",
        show: 'bbb',
        component: Epl,
        bread:[{name:'首页'},{name:'基础管理'},{name:'房间管理'}]
    },
    {
        path: "/home/allen",
        show: 'bbb',
        component: TestPage,
        bread:[{name:'首页'},{name:'商家设置'},{name:'商家管理'}]
    },
    {
        path: "/home/allen/form",
        show: 'ccc',
        component: FormPage,
        bread:[{name:'首页'},{name:'商家设置'},{name:'商家管理'},{name:'新增商家'}]
    },
    {
        path: "/home/allen/detail",
        show: 'ccc',
        component: DetailPage,
        bread:[{name:'首页'},{name:'商家设置'},{name:'商家管理'},{name:'商家详情'}]
    },
    {
        path: "/home/charts",
        show: 'ccc',
        component: ChartsPage,
        bread:[{name:'首页'},{name:'图表设置'},{name:'柱状图表'}]
    },
    {
        path: "/home/pie",
        show: 'ccc',
        component: PiePage,
        bread:[{name:'首页'},{name:'图表设置'},{name:'饼状图表'}]
    },
    {
        path: "/home/map",
        show: 'eee',
        component: MapPage,
        bread:[{name:'首页'},{name:'图表设置'},{name:'地图运用'}]
    }
];

export default  routes;