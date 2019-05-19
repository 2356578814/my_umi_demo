import axios from "axios";

export default {

    namespace : "register",

    state : {
        a:""
    },

    subscriptions : {
        a(){}
    },

    effects : {
        *register({payload},{call,put}){
            const obj = yield call(axios.post,"/account/register/",{username:"11",password:"22"})
            console.log(obj)
        }
    },

    reducers : {
        a(){}
    }
}