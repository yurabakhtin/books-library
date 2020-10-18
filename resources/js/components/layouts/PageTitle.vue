<template>
<div>
    <b-container class="mt-3">
        <b-row>
            <h1>{{getPageTitle()}}</h1>
        </b-row>
    </b-container>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    methods: mapGetters('main', ['getPageTitle']),
}
</script>