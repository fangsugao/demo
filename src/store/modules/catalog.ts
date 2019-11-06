import { catalog, category, goodList, branddetail, goodCategory } from '../../service'

export default {
    namespaced: true,
    state: {
        categorysArr: [],
        renderArr: [],
        renderList:[],
        brandArr:{},
        name:'',
        frontName:'',
        classList:[]
    },
    mutations: {
        setRend(state:any,payload: any){
            // console.log(payload,'head----------')
            state.renderArr = payload
        },
        setCate(state: any, payload: any) {
            console.log(payload,'----setCate')
            state.categorysArr = payload.data;
            let index = payload.data.findIndex((el:any) => el.id == payload.id);
            state.name=payload.data[index].name
            state.frontName=payload.data[index].front_name
        },
        setGood(state: any, payload: any) {
            state.renderList = payload.data
        },
        setBrand(state: any, payload: any) {
            state.brandArr = payload
        },
        setCategorys(state:any,payload:any){
            state.classList=payload.categoryList;
        }
    },
    actions: {
        // 分类右下对应内容
        async category({commit}: any,id:any){
            let result = await category(id)
            commit('setRend', result.data.currentCategory.subCategoryList)
        },
        // 分类左侧列表初始化
        async getCategorys({ commit }: any) {
            let result = await catalog()
            commit('setCategorys', result.data)
        },
        // 奇趣分类中对应的内容选项
        async getGood({ commit }: any,payload:any) {
            let result = await goodList(payload)
            commit('setGood', result.data)
        },
        async branddetail({ commit }: any, id: any) {
            let result = await branddetail(id)
            commit('setBrand', result.data.brand)
        },
        async getGoodCategory({commit}:any,payload:any){
            // console.log(id,'------id')
            let result = await goodCategory(payload)
            commit('setCate',{ data:result.data.brotherCategory,id:payload.id })
            // console.log(result,'result------------')
        }
    }
}