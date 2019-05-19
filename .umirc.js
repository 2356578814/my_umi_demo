export default {
    //修改Antd中的less文件定义的变量，改变样式
      theme: {
        
      },
      history:"hash",
      /*routes: [
        {
          path:"/",
          component : "./login"
        },
        {
          path : "/",
          component: '../layout/index',
          routes: [
              {
                path : "/home",
                component : "./404.js"
              },
              {
                path: 'helloworld',
                component: './HelloWorld'
              },
              {
                path : "counter",
                component :"./counter"
              },
              {
                path : "Table",
                component : "./list/index"
              },
              {
                path : "cssDemo",
                component : "./index.jsx"
              },
              {
                path : "lessDemo",
                component : "./css-modules-with-less/index.jsx"
              },
              {
                path : "lessAntd",
                component : "./css-modules-with-antd/index.jsx"
              },
              {
                path : "user",
                component :"../layout/user"
              },{
                path : "/dashboard",
                routes:[
                  { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                  { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                  { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
              }
            ]
        }],*/
        plugins: [
          ['umi-plugin-react', {
            antd : true,
            dva: true
          }],
        ],
        //代理axios请求的url为 "/account" 的时候，代理服务器会请求下方target的值并返回
        proxy : {
          "/api" : {
            target : "http://wechat.yunbeisoft.com/index_test.php/home/account/login",
            changeOrigin : true,
            pathRewrite : {"/api": ""}
          }
        }
  }
  