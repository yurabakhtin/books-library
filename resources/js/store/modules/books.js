import axios from 'axios'
import router from '../../router'

export default {
    namespaced: true,
    actions: {
        loadBooks({commit, state, rootState}) {
            const params = {
                page: state.currentPage,
                search: rootState.search.keyword,
            }
            commit('changeLoadingStatus', true)
            commit('setBookError', '')
            axios.get('/api/books', {params})
                .then(({data}) => {
                    commit('changeLoadingStatus', false)
                    commit('refreshBooksData', data)
                })
                .catch((error) => {
                    commit('changeLoadingStatus', false)
                    commit('setBookError', `Cannot load books! ERROR: ${error.toJSON().message}`)
                })
        },
        changePage({commit, dispatch}, page) {
            commit('setPage', page)
            dispatch('loadBooks')
        },
        showBook({}, bookId) {
            router.push({ name: 'book', params: { bookId } })
        },
        loadBook({commit}) {
            commit('setCurrentBook', {})
            commit('changeLoadingStatus', true)
            const bookId = router.currentRoute.params.bookId
            axios.get('/api/books/' + bookId)
                .then(({data}) => {
                    commit('changeLoadingStatus', false)
                    commit('setCurrentBook', data)
                })
                .catch((error) => {
                    commit('changeLoadingStatus', false)
                    commit('setBookError', `Cannot load book by ID=${bookId}! ERROR: ${error.toJSON().message}`)
                })
        }
    },
    mutations: {
        changeLoadingStatus(state, status) {
            state.loading = status
        },
        refreshBooksData(state, data) {
            state.books = data.data
            state.booksCount = data.total
            state.perPage = data.per_page
        },
        setPage(state, page) {
            state.currentPage = page
        },
        setCurrentBook(state, data) {
            state.currentBook = data
        },
        setBookError(state, error) {
            state.error = error
        }
    },
    state: {
        loading: true,
        books: [],
        booksCount: 0,
        perPage: 0,
        currentPage: 1,
        currentBook: {},
        error: '',
    },
    getters: {
        isLoading(state) {
            return state.loading
        },
        getBooks(state) {
            return state.books
        },
        getBooksCount(state) {
            return state.booksCount
        },
        getPerPage(state) {
            return state.perPage
        },
        getCurrentPage(state) {
            return state.currentPage
        },
        getBookData: (state) => (column) => {
            return typeof state.currentBook[column] == undefined ? '' : state.currentBook[column]
        },
        getBookError(state) {
            return state.error
        }
    },
}