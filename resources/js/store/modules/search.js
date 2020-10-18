import router from '../../router'

export default {
    namespaced: true,
    actions: {
        searchBooks({commit, dispatch, state}) {
            commit('books/setPage', 1, {root: true})
            dispatch('books/loadBooks', null, {root: true})
            router.push({ name: 'home' })
                .catch(() => dispatch('main/changePageTitle', 'search', {root: true}))
        }
    },
    state: {
        keyword: '',
    },
    getters: {
        getKeyword(state) {
            return state.keyword
        }
    },
    mutations: {
        setSearchKeyword(state, keyword) {
            state.keyword = keyword
        }
    },
}