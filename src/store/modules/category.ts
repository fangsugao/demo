import { goodList } from '@/service/service'

const state = {
    query: {
        brandId: '',
        categoryId: '',
        sort: '',
        order: '',
        page: 1,
        size: ''
    },
    limit: 10,
    count: 0,
    value: []
}

const mutations = {
    setCategoryId(state: any, payload: string) {
        state.query.categoryId = payload;
    },
    setPage(state: any, payload: any) {
        state.query.page = payload;
    },
    setValue(state: any, payload: any) {
        state.value = payload.data;
        state.count = payload.count;
    },
    appendValue(state: any, payload: any) {
        state.value = state.value.concat(payload.data);
        state.count = payload.count;
    }
}

const actions = {
    async pullRefresh({ commit, state }: any, payload: any) {
        commit('setPage', 1);
        let params: any = {};
        for (let key in state.query) {
            if (state.query[key]) {
                params[key] = state.query[key]
            }
        }
        // console.log('params...', params);
        let data: any = await goodList(params);
        commit('setValue', data.data);
    },

    async loadMore({ commit, state }: any, { page }: any) {
        commit('setPage', page);
        let params: any = {};
        for (let key in state.query) {
            if (state.query[key]) {
                params[key] = state.query[key]
            }
        }
        // console.log('params...', params, page);

        let data: any = await goodList(params);
        commit('appendValue', data.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
