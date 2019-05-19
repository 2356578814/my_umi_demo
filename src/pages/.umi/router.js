import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/users",
        "exact": true,
        "component": require('../users/index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/Dashboard/Analysis",
        "exact": true,
        "component": require('../Dashboard/Analysis.js').default
      },
      {
        "path": "/Dashboard/Monitor",
        "exact": true,
        "component": require('../Dashboard/Monitor.js').default
      },
      {
        "path": "/Dashboard/Workplace",
        "exact": true,
        "component": require('../Dashboard/Workplace.js').default
      },
      {
        "path": "/css-modules-with-antd",
        "exact": true,
        "component": require('../css-modules-with-antd/index.jsx').default
      },
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/a/models/b",
        "exact": true,
        "component": require('../a/models/b.js').default
      },
      {
        "path": "/a/a",
        "exact": true,
        "component": require('../a/a.js').default
      },
      {
        "path": "/visible/pages",
        "exact": true,
        "component": require('../visible/pages.js').default
      },
      {
        "path": "/css-modules-with-less",
        "exact": true,
        "component": require('../css-modules-with-less/index.jsx').default
      },
      {
        "path": "/users/list",
        "exact": true,
        "component": require('../users/list.js').default
      },
      {
        "path": "/visible/compon/pag",
        "exact": true,
        "component": require('../visible/compon/pag.js').default
      },
      {
        "path": "/BizCharts",
        "exact": true,
        "component": require('../BizCharts.js').default
      },
      {
        "path": "/HelloWorld",
        "exact": true,
        "component": require('../HelloWorld.js').default
      },
      {
        "path": "/counter",
        "exact": true,
        "component": require('../counter.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login.js').default
      },
      {
        "path": "/register",
        "exact": true,
        "component": require('../register.js').default
      },
      {
        "path": "/weChat",
        "exact": true,
        "component": require('../weChat.js').default
      },
      {
        "path": "/zidongyanghao",
        "exact": true,
        "component": require('../zidongyanghao.js').default
      },
      {
        "component": () => React.createElement(require('d:/umi_js/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('d:/umi_js/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
