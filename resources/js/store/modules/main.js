import router from '../../router'

export default {
    namespaced: true,
    actions: {
        changePageTitle({commit}, title) {
            commit('setPageTitle', title)
            document.title = this.getters["main/getPageTitle"] + ' - ' + window.site_config.app_name
        },
        routeHome({commit, dispatch}) {
            commit('search/setSearchKeyword', '', {root: true})
            commit('books/setPage', 1, {root: true})
            dispatch('books/loadBooks', null, {root: true})
            router.push({ name: 'home' })
                .catch(() => dispatch('changePageTitle', 'home'))
        }
    },
    state: {
        pageTitle: 'home',
        titles: {
            home: 'Books list',
            search: 'Searching',
            book: 'Book details',
        }
    },
    mutations: {
        setPageTitle(state, title) {
            state.pageTitle = title
        }
    },
    getters: {
        getPageTitle(state) {
            return state.titles[state.pageTitle] ? state.titles[state.pageTitle] : state.pageTitle;
        }
    },
}