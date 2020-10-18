<template>
<div class="w-100">
    <h3>{{getBookData('title')}}</h3>
    <b-alert variant="danger" :show="getBookError.length">{{getBookError}}</b-alert>
    <div v-if="isLoading" class="text-center">
        <b-spinner variant="primary" class="m-5"/>
    </div>
    <strong v-else-if="!getBookData('id')">No book found.</strong>
    <div v-else>
        <b-img-lazy
            :src="'/api/books/' + getBookData('id') + '/thumbnail'"
            width="200" height="400"
            blank-color="#6cb2eb"
            rounded left class="mr-3"></b-img-lazy>
        <p>{{getBookData('description')}}</p>
        <div class="clearfix"></div>
        <small class="text-muted">ISBN: {{getBookData('isbn')}}</small><br>
        <b-button variant="primary" @click="goBack"><b-icon icon="arrow-left-circle-fill"></b-icon> Back</b-button>
    </div>
</div>
</template>

<script>
import router from '../router'
import {mapActions, mapGetters} from 'vuex'

export default {
    methods: {
        ...mapActions('main', ['changePageTitle']),
        ...mapActions('books', ['loadBook']),
        goBack() {
            router.go(-1)
            this.changePageTitle(this.$store.getters['search/getKeyword'] ? 'search' : 'home')
        }
    },
    computed: {
        ...mapGetters('books', ['isLoading', 'getBookData', 'getBookError']),
        ...mapGetters('search', ['getKeyword'])
    },
    mounted() {
        this.loadBook()
        this.changePageTitle('book')
    },
}
</script>