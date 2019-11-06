import { collectList, collectDel } from '../../service'
export default {
    namespaced: true,
    state: {
        collectArr: [],
        start: false
    },
    mutations: {
        setCollectList(state: any, payload: any) {
            state.collectArr = payload
        },
        setCollectDel(state: any, payload: any) {
            let index=state.collectArr.findIndex((item:any)=>item.value_id===payload)
            state.collectArr.splice(index,1)
        }
    },
    actions: {
        // 获取地址数据
        async getCollectList({ commit }: any, payload: any) {
            let result = await collectList(payload)
            commit('setCollectList', result.data)
            console.log(result,'--------get')
        },
        // 删除收藏
        async getCollectDel({ commit }: any, payload: any) {
            let result = await collectDel(payload)
            commit('setCollectDel',payload.valueId)
        }
    }
}