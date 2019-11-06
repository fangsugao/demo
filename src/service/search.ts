import requerst from "../utils/request";

// 搜索初始页面 
export let search = () => {
     return requerst.get("/search/index");
};

// 搜索内容详情
export let searchDetail = (params:any) => {
    return requerst.get("/goods/list",{params});
};

// 删除商品
export let searchDel=()=>{
    return requerst.get('/search/clearhistory')
}