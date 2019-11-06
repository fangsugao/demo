import { topic, topicDetail, commitList, relatedList, addLange } from '../../service'

export default {
    namespaced: true,
    state: {
        list: [],
        detailList: {},
        valueId: '',
        typeId: '',
        commitDate: [],
        relatedList:[],
        content:'',
        commit:[],
        lange:{}
    },
    mutations: {
        setTopic(state: any, payload: any) {
            state.list = payload.data
        },
        setTopicDetail(state: any, payload: any) {
            state.detailList = payload
            state.typeId = payload.is_show
            state.valueId = payload.id
        },
        setCommitList(state: any, payload: any) {
            state.commitDate = payload.data
        },
        setRelated(state:any,payload:any){
            state.relatedList = payload
        },
        setContent(state:any,payload:any){
            state.content=payload
        },
        setCommit(state:any,payload:any){
            console.log(payload,'......comment')
            state.commit=payload
        },
        setLange(state:any,payload:any){
            console.log(payload)
            if(payload.errno===0){
                alert(payload.data)
            }
        }
    },
    actions: {
        async  getTopic({ commit }: any, payload: object) {
            let result = await topic(payload)
            commit('setTopic', result.data)
        },
        async  getTopicDetail({ commit }: any, payload: object) {
            let result = await topicDetail(payload)
            commit('setTopicDetail', result.data)
        },
        async  getCommitList({ commit, state }: any) {
            const { valueId, typeId } = state
            let result = await commitList({ valueId, typeId })
            commit('setCommitList', result.data)
        },
        async  getrelated({ commit, state }: any) {
            const { valueId } = state
            let result = await relatedList({ id:valueId })
            commit('setRelated', result.data)
        },
        async  getLange({ commit, state }: any) {
            const { valueId, typeId, content } = state
            let result = await addLange({ valueId, typeId, content })
            commit('setLange', result)
        },
        async  getCommit({ commit, state }: any,payload:any) {
            // console.log(payload)
            const { valueId, typeId } = state
            let result = await commitList({ valueId:payload, typeId, page:1, size:100 })
            commit('setCommit', result.data)
        },
    }
}