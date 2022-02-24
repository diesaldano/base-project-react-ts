import React from 'react'
import Home from "../containers/home/Home"

const routes = [
    {
      path: '/', // the url
      name: 'Home', //item list
      exact: true,
      main: () => <Home />
    },
    {
        path: '/trade', // the url
        name: 'Trade', //item list
        exact: true,
        main: () => <h2>Trade</h2>
    },
    {
        path: '/borrow', // the url
        name: 'Borrow', //item list
        exact: true,
        main: () => <h2>Borrow</h2>
    },
    {
        path: '/farm', // the url
        name: 'Farm', //item list
        exact: true,
        main: () => <h2>Farm</h2>
    },
    {
        path: '/donate', // the url
        name: 'Donate', //item list
        exact: true,
        main: () => <h2>Donate</h2>
    },
  ]
  
  export default routes