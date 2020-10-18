import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'
import books from './modules/books'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {main, books, search},
})