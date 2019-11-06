import { login } from '../../service'

export default {
    namespaced: true,
    state: {
        
    },
    mutations: {
        setLogin(state:any,payload:any){
            const {errno,data}=payload
            if(errno===0){
                window.localStorage.setItem('token', data.sessionKey)
                window.localStorage.setItem('nideShopUser', data.mobile)
                window.localStorage.setItem('password', data.password)
            }
        }
    },
    actions: {
        async  getUserLogin({ commit }: any, payload: object) {
            let result = await login(payload)
            commit('setLogin',result)
        }
    }
}