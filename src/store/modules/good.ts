import { goodDetail, goodLook, collectAdd } from '../../service'

export default {
    namespaced: true,
    state: {
        attribute:[],
        comment:{},
        gallery:[],
        issue:[],
        goodsList:[],
        info:{},
        commentData:{},
        img:'',
        numCar:0,
        productList:{},
        start: false
    },
    mutations: {
        setGood(state:any,payload:any){
            // 商品参数
            state.attribute=payload.attribute
            // 评论条数
            state.comment=payload.comment
            // 详情单条评论
            state.commentData=payload.comment.data
            // 轮播图
            state.gallery=payload.gallery
            // 选择规格中的图片
            state.img=payload.gallery[0].img_url
            // 常见问题
            state.issue=payload.issue
            // 主要参数
            state.info=payload.info
            // 加入购物车需要的参数
            state.productList=payload.productList[0]
        },
        setGoodLook(state:any,payload:any){
            state.goodsList=payload.goodsList
        },
        setNumCar(state:any,payload:any){
            state.numCar+=payload
            console.log(state.numCar)
        },
        setAdd(state:any,payload:any){
            // 判断收藏颜色
            if (payload.type === 'add') {
                state.info.is_app_exclusive=1
            } else {
                state.info.is_app_exclusive=0
            }
            console.log(payload)
        }
    },
    actions: {
        async getGood({ commit }: any, payload: object) {
            let result = await goodDetail(payload)
            // console.log(result.data,1111)
            commit('setGood',result.data)
        },
        async getGoodLook({ commit }: any, payload: object) {
            let result = await goodLook(payload)
            commit('setGoodLook',result.data)
            // console.log(result.data,2222)
        },
        async getCommit({ commit }: any, payload: object) {
            console.log(payload)
            let result = await commit(payload)
            // commit('setGoodLook',result.data)
            // console.log(result.data,1111)
        },
        async getCollectAdd({ commit }: any, payload: any) {
            let result = await collectAdd(payload)
            // console.log(payload,'-----------add')
            commit('setAdd', result.data)
        }
    }
}