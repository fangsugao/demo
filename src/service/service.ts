import request from '../utils/request'
// 首页请求
export let  getList = ()=>{
     return request.get('/');
}
// 分类获取初始数据
export let catalog = ()=>{
     // console.log(id)
     return request.get('/catalog/index')
}
export let category = (id: any)=>{
     return request.get(`/catalog/current?id=${id}`)
}

// 每一项对应的内容
export let goodList = (params:any)=>{
     // console.log(id)
     return request.get('/goods/list',{params})
}

//  获取品牌制造商
export let branddetail = (id:any)=>{
     return request.get(`/brand/detail?id=${id}`)
}

// 获取制造商列表
export let brandList = (obj?:any)=>{
     return request.get('/goods/list',{params:obj})
}

// 分类中每一项点击跳转页面
export let goodCategory = (params:any)=>{
     return request.get('/goods/category',{params})
// 获取用户地址
}
export let getAddress = ()=>{
     return request.get('/address/list')
}
