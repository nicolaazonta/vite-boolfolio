<script>
import { store } from '../store'

export default {
    name: 'ProjectCard',

    data() {
        return {
            store
        }
    },
}
</script>

<template v-if="store.projects">
    <div class="col-4 g-3" v-for="project in store.projects" >

        <router-link class="text-decoration-none" :to="{ name: 'project-inside', params: { slug: project.slug } }">


            <div style="aspect-ratio: 1;" class="card text_color card_bg card_hover p-1 ">
                <div class="card-title">
                    <h4>{{ project.name }}</h4>
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
