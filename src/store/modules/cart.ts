import { shopCar, addShop, delShop } from '../../service'

export default {
    namespaced: true,
    state: {
        cartList:[],
        itemCheck:0,
        goodsCount:{},
        sucessNum:0,
        IsCheckAll:true
    },
    mutations: {
        setShopCar(state:any,payload:any){
            // console.log(payload.cartList,'-----carList')
            state.cartList=payload.cartList,
            state.cartTotal=payload.cartTotal
            state.sucessNum=payload.cartList.length
        },
        setCheck(state:any,payload:any){
            // 单选 反选
            let index = state.cartList.findIndex((el:any)=>el.goods_id===payload)
            state.cartList[index].checked = Number(!state.cartList[index].checked)
        },
        setAllCheck(state:any){
            // 全选 反全选
            state.IsCheckAll = !state.IsCheckAll
            state.cartList.forEach((el:any)=>{el.checked= Number(state.IsCheckAll)})
        },
        setMin(state:any,payload:any){
            let index = state.cartList.findIndex((el:any)=>el.goods_id===payload)
            state.cartList[index].number--
        },
        setMax(state:any,payload:any){
            let index = state.cartList.findIndex((el:any)=>el.goods_id===payload)
            state.cartList[index].number++
        },
        setDelShop(state:any,payload:any){
            state.cartList=payload.cartList
        }
    },
    actions: {
        // 商品列表
        async getShopCar({ commit }: any) {
            let result = await shopCar()
            commit('setShopCar',result.data)
        },
        // 添加商品
        async getAddShop({commit}:any,payload:any){
            let result = await addShop(payload)
        },
        // 删除商品
        async getdelShop({commit}:any,payload:any){
            let result = await delShop(payload)
            commit('setDelShop',result.data)
        }
    },
    getters:{
        // 计算总价
        setTotal(state:any,payload:any){
            return payload.getCheked.reduce((prv:any,cru:any)=>{
                return prv+=cru.number*cru.retail_price
            },0)
        },
        getCheked(state:any){
            // 判断是否是选中状态，不是则不计算总价
            return state.cartList.filter((item:any)=>item.checked===1)
        },
        cartNum(state:any,payload:any){
            // 计算商品个数
            return payload.getCheked.reduce((s:any,v:any)=>{return s+=v.number},0)
        },
        setBtnall(state:any){
            // 计算全选按钮状态
            if(state.cartList.length){
                return state.cartList.every((item:any)=>item.checked===1)
            }else{
                return false
            }
        }
            
    }
}