<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-container>
            <b-navbar-brand @click.prevent="routeHome" to="/">
                <b-icon icon="book"></b-icon>
                Books Library
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav class="mr-auto">
                    <SearchForm/>
                </b-navbar-nav>


                <b-navbar-nav>
                    <b-nav-item href="/importer"><b-icon icon="tools"></b-icon> Back-office</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</div>
</template>

<script>
import SearchForm from './SearchForm'
import {mapActions} from 'vuex'

export default {
    components: {
        SearchForm
    },
    methods: mapActions('main', ['routeHome'])
}
</script>


