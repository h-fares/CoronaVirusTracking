<template>
    <div>
        <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="cases.countries" @changePage="onChangePage" :pageSize="15"></jw-pagination>
        </div>
        <div class="container">
            <div class="row">
                <country  v-for="country in paginatedCountry" :key="country['Country']" :country="country"></country>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import Country from "./Country";
    export default {
        name: "Countries",
        components: {
            Country
        },
        created() {
            this.fetchCountries();
        },
        computed: {
            ...mapState(['cases'])
        },
        methods: {
            onChangePage(pageOfItems) {
                // update page of items
                this.paginatedCountry = pageOfItems;
            },
            ...mapActions('cases', ['fetchCountries'])
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