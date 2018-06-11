const arr = [
    {
        name:'基础管理',
        show: 'aaa',
        children: [
            {
                name:'菜单管理',
                path: "/home/base",
                show: 'aaa',
            },
            {
                name:'功能管理',
                path: "/home/epl",
                show: 'aaa'
            },
        ]
    },
    {
        name: "商家设置",
        show: 'bbb',
        children: [
            {
                name: '商家管理',
                path: "/home/allen",
                show: 'bbb'
            }
        ]
    },
    {
        name: "图表设置",
        show: 'ccc',
        children: [
            {
                name: '柱状图表',
                path: "/home/charts",
                show: 'ccc'
            },
            {
                name: '饼状图表',
                path: "/home/pie",
                show: 'ddd'
            },
            {
                name: '地图运用',
                path: "/home/map",
                show: 'eee'
            }
        ]
    }
]
export default arr;
