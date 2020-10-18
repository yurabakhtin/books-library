<template>
    <div>
        <b-nav-form @submit.prevent="searchBooks">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search..." v-model="keyword"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="warning"><b-icon icon="search"></b-icon> Search</b-button>
        </b-nav-form>
    </div>
</template>

<script>
import {mapActions, mapFields} from 'vuex'

export default {
    methods: mapActions('search', ['searchBooks']),
    computed: {
        keyword: {
            get () {
                return this.$store.state.search.keyword
            },
            set (value) {
                this.$store.commit('search/setSearchKeyword', value)
            }
        }
    }
}
</script>