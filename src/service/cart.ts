import requerst from "../utils/request";

// 获取用户购物车数据
export let shopCar = () => {
     return requerst.get("/cart/index");
};

// 添加到购物车
export let addShop = (params:object) => {
     return requerst.post("/cart/add",params);
};

// 删除购物车商品
export let delShop = (params:object) => {
     return requerst.post("/cart/delete",params);
};