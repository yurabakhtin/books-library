<template>
<div>
    <Header/>
    <PageTitle/>
    <b-container class="mt-3">
        <b-row>
            <router-view/>
        </b-row>
    </b-container>
    <Footer/>
</div>
</template>

<script>
import Header from './layouts/Header'
import PageTitle from './layouts/PageTitle'
import Footer from './layouts/Footer'
import {mapActions} from 'vuex'

export default {
    components: {
        Header, PageTitle, Footer
    },
    methods: mapActions('main', ['changePageTitle']),
    mounted() {
        this.changePageTitle('home')
    }
}
</script>
