<template>
<div class="w-100">
    <b-alert variant="danger" :show="getBookError.length">{{getBookError}}</b-alert>
    <div v-if="isLoading" class="text-center">
        <b-spinner variant="primary" class="m-5"/>
    </div>
    <strong v-else-if="!getBooksCount">No books found.</strong>
    <BookList v-else :books="getBooks"/>
</div>
</template>

<script>
import BookList from './BookList'
import {mapGetters, mapActions} from 'vuex'

export default {
    components: {
        BookList
    },
    computed: mapGetters('books', ['isLoading', 'getBooks', 'getBooksCount', 'getBookError']),
    methods: mapActions('books', ['loadBooks']),
    mounted() {
        this.loadBooks()
    },
}
</script>