import styled from "styled-components";
import global from "@/core/global"

let r = global.r;
export const FootTab = styled.div`
width:100%;
position:fixed;
bottom:0;
z-index: 100;
display:${props => props.display};

.am-tab-bar-bar{
    height:${r(50)};
}
`
// 首页
export const IndexIcon = styled.div`
width:${r(30)};
height: ${r(30)};
background:url("https://image.juooo.com/group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png") no-repeat ;
background-size:100%;

    img{
        width: 100%;
        height: 100%;
    }
`
export const IndexTxt = styled.div`
width:${r(42)};
height: ${r(42)};
background:url("https://image.juooo.com/group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png")  no-repeat 0 ${r(-40)};
background-size:100%;

    img{
        width: 100%;
        height: 100%;
    }
`

// 剧院
export const TheaterIcon = styled.div`
width:${r(30)};
height: ${r(30)};
background:url("https://image.juooo.com/group1/M00/02/7F/rAoKNVwtUeGAOGfGAAAKR4Zrvs0487.png") no-repeat;
background-size:100%;

    img{
        width: 100%;
        height: 100%;
    }
`
export const TheaterTxt = styled.div`
width:${r(30)};
height: ${r(30)};
background:url("https://image.juooo.com/group1/M00/02/7F/rAoKNVwtUeGAOGfGAAAKR4Zrvs0487.png") no-repeat 0 ${r(-30)};
background-size:100%;

    img{
        width: 100%;
        height: 100%;
    }
`

// 票夹
export const TicketFolderIcon = styled.div`
width:${r(30)};
height: ${r(30)};
background:url("https://image.juooo.com/group1/M00/02/71/rAoKNVwRraqAMv3SAAAIdQJTBKA919.png") no-repeat;
background-size:100%;

    img{
        width: 100%;
        height: 100%;
    }
`
export const TicketFolderTxt = styled.div`
width:${r(30)};
height: ${r(30)};
background:url("https://image.juooo.com/group1/M00/02/71/rAoKNVwRraqAMv3SAAAIdQJTBKA919.png") no-repeat 0 -${r(30)};
background-size:100%;

    img{
        width: 100%;
        height: 100%;
    }
`

// 我的
export const MyIcon = styled.div`
width:${r(30)};
height: ${r(30)};
background:url("https://image.juooo.com/group1/M00/01/81/rAoKmVuQedqADpfXAAAQDvkHt5o350.png") no-repeat;
background-size:100%;

    img{
        width: 100%;
        height: 100%;
    }
`
export const MyTxt = styled.div`
width:${r(30)};
height: ${r(30)};
background:url("https://image.juooo.com/group1/M00/01/81/rAoKmVuQedqADpfXAAAQDvkHt5o350.png") no-repeat 0 -${r(30)};
background-size:100%;

    img{
        width: 100%;
        height: 100%;
    }
`