<template>
    <div class="container">
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
        <div class="row">
            <country  v-for="country in countries" :key="country['Country']" :country="country"></country>
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
        }
    }
</script>

<style scoped>

</style>