import requerst from "../utils/request";

// 查询收藏栏商品
export let collectList = (params: object) => {
    return requerst.get("/collect/list", { params });
};

// 删除收藏项
export let collectDel = (params: object) => {
    return requerst.post('/collect/addordelete', params)
}

// 添加收藏
export let collectAdd = (params: object) => {
    return requerst.post('/collect/addordelete', params)
}