

export default {
    namespace : "ceshi",
  
    state : {
      cardsList : [],
      cardsLoading : true
    },
  
    subscriptions: {
      a(){}
    },
  
    effects:{
      *queryList(_,sagaEffects){
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
        console.log(_)
        console.log(sagaEffects)
        yield sagaEffects.call(delay,3000)
        yield sagaEffects.put({type:"a",data:cardsList})
      }
    },
  
    reducers : {
      a(state,action){
        console.log(action.data)
        return{
          cardsList : action.data,
          cardsLoading : false
        }
      }
    }
  }