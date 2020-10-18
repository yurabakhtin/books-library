<template>
    <b-pagination
            v-if="getBooksCount > 1"
            :value="getCurrentPage"
            :total-rows="getBooksCount"
            :per-page="getPerPage"
            prev-text="Prev"
            next-text="Next"
            @change="changePage"
            align="center"
    ></b-pagination>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    computed: mapGetters('books', ['getPerPage', 'getBooksCount', 'getCurrentPage']),
    methods: mapActions('books', ['changePage']),
}
</script>