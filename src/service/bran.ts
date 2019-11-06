import { brandList, catalog } from './service'

// 获取制造商列表
export let getBrandList = async (obj?:any)=>{
    let result = await brandList(obj)
    return result.data.data
}
    // 获取奇趣分类初始
export let getCategory = async ()=>{
    let result =  await catalog();
    return result.data
}