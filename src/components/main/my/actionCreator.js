import axios from "axios";
import qs from "qs";

// 登录
export const LoginAsync=(data,callback)=>{
    axios({
        method:"post",
        url:"/login",
        data:qs.stringify(data)
    }).then((res)=>{
        callback(res);

    })
}