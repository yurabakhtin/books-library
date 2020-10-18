<template>
    <b-col @click="showBook(book.id)">
        <b-img-lazy
            :src="'/api/books/' + book.id + '/thumbnail'"
            width="200" height="400"
            blank-color="#6cb2eb"
            rounded></b-img-lazy><br>
        <small class="text-muted">ISBN: {{book.isbn}}</small>
        <h5>{{book.title}}</h5>
        <p>{{book.description}}</p>
    </b-col>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        book: Object
    },
    methods: mapActions('books', ['showBook'])
}
</script>

<style scoped>
.col {
    padding-top: 15px;
    border-radius: 5px;
}
.col:hover {
    background: #eee;
    cursor: pointer;
}
</style>