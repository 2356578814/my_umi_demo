
import {delay} from "dva/saga";

export default {

    namespace : "zdyh",

    state : {
        loading : true,
        dataSource : [],
        num : 1
    },

    subscriptions : {
        a({dispatch,history}){
            return history.listen(({ pathname, search, query })=>{
                alert(111)
            })
            if(pathname === "/"){
                alert(22)
            }
        }
    },

    effects : {
        *tableLoading({payload},{put,call}){
            const dataSource = [
                {
                    "key" : "一1",
                    "一" : "阅读腾讯新闻 ➕ 阅读公众号文章 ➕ 看一看",
                    "三" : "2019-03-22 11:00:00",
                    "四" : "单次执行",
                    checked : true
                },
                {
                    "key" : "二2",
                    "一" : "阅读腾讯新闻",
                    "三" : "	2019-02-15 20:00:00",
                    "四" : "单次执行",
                    checked : true
                },
                {
                    "key" : "三3",
                    "一" : "阅读腾讯新闻 ➕ 阅读公众号文章 ➕ 看一看",
                    "三" : "2019-01-24 16:53:08",
                    "四" : "循环执行",
                    checked : true
                }
            ]
            yield call(delay,3000)  
            yield put({type:"deleteLoading",dataSource})
        },
        *onSwitchChecked({payload},{put,call,select}){
            let data = (yield select(state => state.zdyh)).dataSource;
            //为什么这个data下方还没有改变checked的值 就是false了
            //如果不利用深拷贝 为什么下方必须返回一个没关系的num才会更新View
            data = JSON.parse(JSON.stringify(data))
            data[payload.index].checked = !data[payload.index].checked;
            console.log('2--2',data, payload)
            yield put({ type :"switchChecked",data})
            
        }
    },

    reducers : {
        deleteLoading(state,action){
            return{
                ...state,
                loading : false,
                dataSource : action.dataSource
            }
        },
        switchChecked(state,action){
            return{
                ...state,
                //为什么必须返回一个num Switch才会更新状态
                //num : state.num+1,
                dataSource : action.data
            }
        }
    }
}