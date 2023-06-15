<script>
import { store } from '../store'

export default {
    name: "ProjectInsideView",
    data() {
        return {
            project: null,
            store,
        };
    },
    methods: {
        fetchSingleProject(url) {
            axios
                .get(url)
                .then(response => {
                    if (response.data.success) {
                        this.project = response.data.result;
                    } else {
                        this.$router.push({
                            name: 'project-not-found',
                            params: { pathMatch: this.$route.path.substring(1).split('/') }
                        })
                    }
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.message);
                })
        }
    },
    mounted() {

        this.fetchSingleProject(this.store.base_api + this.$route.params.slug);

    }
}
</script>

<template>
    <div class="container w-75">
        <h6>projectinside</h6>

        <h2>{{ project.id }}</h2>
    </div>
</template>

<style lang="scss" scoped></style>