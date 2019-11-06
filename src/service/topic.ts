import requerst from "../utils/request";

// 请求专题列表
export let topic = (params: object) => {
     return requerst.get("/topic/list",{params});
};

// 专题详情
export let topicDetail = (params:any) => {
    return requerst.get('/topic/detail',{params});
};

//单页面评论
export let  commitList = (params:any) => {
    return requerst.get('/comment/list',{params});
}

//推荐专题
export let  relatedList = (params:any) => {
    return requerst.get('/topic/related',{params});
}

// 添加留言
export let  addLange = (params:any) => {
    return requerst.post('comment/post',params);
}
