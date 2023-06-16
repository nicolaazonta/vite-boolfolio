<script>
import { store } from '../store'
import axios from 'axios';

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
        this.fetchSingleProject(this.store.base_api + '/' + this.$route.params.slug);
    }
}
</script>

<template>
    <div class="container w-75">
        <div class="card my-3 p-2 card_bg text_color" v-if="project">
            <h2>{{ project.name }}</h2>

            <h4>{{ project.description }}</h4>
            <h4>{{ project.type?.name }}</h4>

            <div class="section">
                <h6 class="d-inline-block me-1" v-for="technology in project.technologies"><span class="badge text-bg-light">{{
                    technology.name }}</span></h6>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped></style>