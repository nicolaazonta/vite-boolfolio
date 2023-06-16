<script>
import { store } from '../store'
import axios from 'axios'

export default {
    name: 'ProjectCard',

    data() {
        return {
            projects: null,
            store
        }
    },
    methods: {
        fetchProjects(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.projects;
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.message);
                })
        }
    },
    mounted() {
        this.fetchProjects(this.store.base_api)
    },
}
</script>

<template v-if="projects" >
    <div class="g-2  g-md-4" v-for="project in projects">

        <router-link class="text-decoration-none" :to="{ name: 'project-inside', params: { slug: project.slug } }">


            <div style="aspect-ratio: 1;" class="card text_color card_bg card_hover p-1 ">
                <div class="card-title">
                    <h4 class="text-uppercase fw-normal">{{ project.name }}</h4>
                    <h4>{{ project.type?.name }}</h4>
                    <div class="section">
                        <h6 class="d-inline-block me-1" v-for="technology in project.technologies"><span
                                class="badge text-bg-light">{{
                                    technology.name }}</span></h6>
                    </div>


                </div>
            </div>

        </router-link>

    </div>
</template >


<style lang="scss" scoped></style>
