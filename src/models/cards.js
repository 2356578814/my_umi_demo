

const delay = (time)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,time)
  })
}

function fn(){
  return 5
}

export default {
  namespace : "cards",

  state : {
    cardsList : [],
    cardsLoading : true
  },

  subscriptions: {
    a(){
      var echoSocket = new WebSocket("ws://echo.websocket.org", ["com.kaazing.echo","example.imaginary.protocol"])
      echoSocket.onopen = function(e) {
          echoSocket.send("你好")
      }
      echoSocket.onmessage = (data)=>{
        console.log(data)
      }
    }
  },

  effects:{
    *queryList({payload},sagaEffects){
      var cardsList = [
        {
          "name" : "umi",
          "desc" : "极快的类 Next.js 的 React 应用框架",
          "url" : "	https://umijs.org"
        },{
          "name" : "antd",
          "desc" : "一个服务于企业级产品的设计体系",
          "url" : "	https://ant.design/index-cn"
        },{
          "name" : "antd-pro",
          "desc" : "一个服务于企业级产品的设计体系",
          "url" : "	https://ant.design/index-cn"
        }
      ]
      console.log(sagaEffects)
      yield sagaEffects.call(delay,3000)
      yield sagaEffects.put({type:"a",data:cardsList})
    }
  },

  reducers : {
    a(state,action){
      console.log("a")
      return{
        cardsList : action.data,
        cardsLoading : false
      }
    },
    b(state,action){
      console.log("b")
      return{
        ...state
      }
    }
  }
}