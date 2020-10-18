<template>
<div>
    <Pagination/>
    <b-row class="mb-5">
        <BookItem v-for="book in books" :key="book.id" :book="book"/>
    </b-row>
    <Pagination/>
</div>
</template>

<script>
import Pagination from '../components/layouts/Pagination'
import BookItem from './BookItem'
export default {
    components: {
        BookItem, Pagination
    },
    props: {
        books: Array
    }
}
</script>