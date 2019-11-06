import { getAddress } from '@/service/service'
export default {
    namespaced: true,
    state: {
        addressList: []
    },
    mutations: {
        setaddressList(state: any, payload: any) {
            state.addressList = payload
        }
    },
    actions: {
        // 获取地址数据
        async getAddressList({ commit }: any) {
            let result = await getAddress()
            console.log(result)
        }
    }
}