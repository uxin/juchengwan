import request from "@/core/http/http";

export const GET_TICKETFOLDER_SHOWCATEGORY = "ticketFolder/get_ticketFolder_showCategory";
export const GET_TICKETFOLDER_LIST = "ticketFolder/get_ticketFolder_list";
export const GET_TICKETFOLDER_CITY = "ticketFolder/get_ticketFolder_city";

export const action = (val, type) => {
    return {
        type,
        val
    }
}

// tab栏
export const loadTicketShowCategoryAsync = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "https://m.juooo.com/Search/getShowCategory?version=6.0.3&referer=2",
            // params:{
            //     version:"6.0.3",
            //     referer:"2",
            // }
        }).then((res) => {
            dispatch(action(res, GET_TICKETFOLDER_SHOWCATEGORY));
        })
    }
}

// 内容部分
// https://m.juooo.com/Search/getShowList?category=35&city_id=0&page=1&keywords=&version=6.0.3&referer=2
export const loadTicketListAsync = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "https://m.juooo.com/Search/getShowList",
            params: {
                category:"35",
                city_id: "0",
                page:"1",
                keywords:"",
                version: "6.0.3",
                referer: "2",
            }
        }).then((res) => {
            dispatch(action(res, GET_TICKETFOLDER_LIST));
        })
    }
}

// 城市

export const loadTicketCitytAsync = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "https://m.juooo.com/Search/getCity?version=6.0.3&referer=2",
        }).then((res) => {
            dispatch(action(res, GET_TICKETFOLDER_CITY));
        })
    }
}