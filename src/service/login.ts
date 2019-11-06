import requerst from "../utils/request";

// 登录
export let login = (params: object) => {
     return requerst.post("/auth/loginByMobile", params);
};