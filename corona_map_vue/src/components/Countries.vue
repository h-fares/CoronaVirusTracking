<template>
    <div class="container-fluid">
        <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="countries" @changePage="onChangePage" :pageSize="15"></jw-pagination>
        </div>
        <div class="row">
            <country  v-for="country in paginatedCountry" :key="country['Country']" :country="country"></country>
        </div>
        <div class="alert alert-danger align-content-center" role="alert">
            For you and your Family <strong>Please #StayHome</strong>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Country from "./Country";
    export default {
        name: "Countries",
        components: {
            Country
        },
        created() {
            this.$store.dispatch('fetchCountries')
        },
        computed: {
            ...mapState(['countries', 'date'])
        },
        methods: {
            onChangePage(pageOfItems) {
                // update page of items
                this.paginatedCountry = pageOfItems;
            }
        },
        data() {
            return {
                paginatedCountry: []
            }
        }
    }
</script>

<style scoped>

</style>