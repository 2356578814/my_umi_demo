import {delay} from "dva/saga"
import {routerRedux} from "dva/router";
console.log(routerRedux)
export default {

    namespace : "weChat",

    state : {
        lod:true,
        dataSource : [],
        visible : false,
        select : null,
        time : null,
        date : null,
    },

    subscriptions : {
        a({dispatch,history}){
            return history.listen((obj)=>{
                console.log(obj)
                console.log(222)
                /*if(obj.pathname === "/wechat"){
                    console.log(1)
                    dispatch(routerRedux.push({
                        pathname : "/",
                        query : {a:"Model"}
                    }))
                }*/
            })
        }
    },

    effects : {
        *loading({payload},{put,call}){
            console.log(location)
            var dataSource = [
                {
                    "key" : "1",
                    "one" : "玩玩",
                    "two" : "demo",
                    "three" : "文本",
                    "five" : "2019-03-22 15:03:33",
                    "seven" : "已执行"
                },
                {
                    "key" : "2",
                    "one" : "测试1",
                    "two" : "demo",
                    "three" : "图文",
                    "five" : "2019-04-20 11:22:56",
                    "seven" : "已执行"
                },
                {
                    "key" : "3",
                    "one" : "测试2",
                    "two" : "demo",
                    "three" : "文本",
                    "five" : "2019-04-15 22:15:47",
                    "seven" : "已执行"
                }
            ]

            yield call(delay,3000)
            yield put({type:"a",dataSource})
        },
        *asyncSearch({payload},{put,call,select}){
            yield put({type:"b"})
            var dataSource = []
            const data =  [
                {
                    "key" : "1",
                    "one" : "玩玩",
                    "two" : "demo",
                    "three" : "文本",
                    "five" : "2019-03-22 15:03:33",
                    "seven" : "已执行"
                },
                {
                    "key" : "2",
                    "one" : "测试1",
                    "two" : "demo",
                    "three" : "图文",
                    "five" : "2019-04-20 11:22:56",
                    "seven" : "已执行"
                },
                {
                    "key" : "3",
                    "one" : "测试2",
                    "two" : "demo",
                    "three" : "文本",
                    "five" : "2019-04-15 22:15:47",
                    "seven" : "已执行"
                }
            ]
            const dataSelect = (yield select(state => state.weChat))
            console.log(dataSelect)
                if(dataSelect.select === "two"){
                    /*push之前必须先清空，因为可能会触发下面的两个if语句，
                     都触发的话 会push一样的内容,因此下方的if语句push之前 都清空了dataSocure数组的内容*/
                    dataSource.splice(0,dataSource.length)
                    for(var i=0;i<data.length;i++){
                        if(data[i].three === "图文"){
                            dataSource.push(data[i])
                        }else{
                            continue;
                        }
                    }
                }else if(dataSelect.select === "three"){
                    dataSource.splice(0,dataSource.length)
                    for(var j=0;j<data.length;j++){
                        if(data[j].three === "文本"){
                            dataSource.push(data[j])
                        }else{
                            continue;
                        }
                    }
                }


                if(dataSelect.time){
                    dataSource.splice(0,dataSource.length)
                    var startTime = dataSelect.time[0].replace(/-/g,"")
                    var endTime = dataSelect.time[1].replace(/-/g,"")
                    for(var i=0;i<data.length;i++){
                        var dataTime = data[i].five.replace(/-/g,"").match(/\d+/)[0]
                        console.log(startTime)
                        console.log(dataTime)
                        console.log(endTime)
                        if(dataTime>startTime && dataTime<endTime){
                            dataSource.push(data[i])
                        }else{
                            continue;
                        }
                    }
                }

                if(dataSelect.time && dataSelect.select){
                    dataSource.splice(0,dataSource.length)
                    console.log("两个都有")
                    var startTime = dataSelect.time[0].replace(/-/g,"")
                    var endTime = dataSelect.time[1].replace(/-/g,"")
                    if(dataSelect.select === "two"){
                        for(var i=0;i<data.length;i++){
                            var dataTime = data[i].five.replace(/-/g,"").match(/\d+/)[0]
                            if(data[i].three === "图文" && dataTime>startTime && dataTime<endTime){
                                dataSource.push(data[i])
                            }else{
                                continue;
                            }
                        }
                    }else if(dataSelect.select === "three"){
                        for(var j=0;j<data.length;j++){
                            var dataTime = data[j].five.replace(/-/g,"").match(/\d+/)[0]
                            if(data[j].three === "文本" && dataTime>startTime && dataTime<endTime){
                                dataSource.push(data[j])
                            }else{
                                continue;
                            }
                        }
                    }
                }
            yield call(delay,3000)
            yield put({type:"a",dataSource})
        },
        *asyncOnReset({payload},{call,put}){
            yield put({type:"TableLoading"})
            const data =  [
                {
                    "key" : "1",
                    "one" : "玩玩",
                    "two" : "demo",
                    "three" : "文本",
                    "five" : "2019-03-22 15:03:33",
                    "seven" : "已执行"
                },
                {
                    "key" : "2",
                    "one" : "测试1",
                    "two" : "demo",
                    "three" : "图文",
                    "five" : "2019-04-20 11:22:56",
                    "seven" : "已执行"
                },
                {
                    "key" : "3",
                    "one" : "测试2",
                    "two" : "demo",
                    "three" : "文本",
                    "five" : "2019-04-15 22:15:47",
                    "seven" : "已执行"
                }
            ]
            yield call(delay,3000)
            yield put({type:"reset",data})
        }
    },


    reducers : {
        a(state,action){
            return{
                ...state,
                lod : false,
                dataSource : action.dataSource
            }
        },
        onVisible(state,action){
            return{
                ...state,
                visible : state.visible === true? false : true
            }
        },
        b(state,action){
            return{
                ...state,
                lod : true,
            }
        },
        onSelect(state,action){
            return{
                ...state,
                select : action.value
            }
        },
        onTime(state,action){
            return{
                ...state,
                time : action.mode,
                date : action.value
            }
        },
        reset(state,action){
            return{
                visible : false,
                select : null,
                time : null,
                date : null,
                lod : false,
                dataSource : action.data
            }
        },
        TableLoading(state,action){
            return{
                ...state,
                lod : true
            }
        }
    }
}