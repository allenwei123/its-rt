import Base from 'pages/baseManage'
import Epl from 'pages/epl'

const routes = [
    {
      path: "/home/base",
      show:'aaa',
      component: Base
    },
    {
      path: "/home/epl",
      show:'bbb',
      component: Epl
    }
  ];

export default routes;