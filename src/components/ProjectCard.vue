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

<template>
    <div class="col-4" v-for="project in store.projects">

        <router-link :to="{ name: 'project-inside', params: { slug: project.slug } }">


            <div class="card">
                <div class="card-title">
                    <h2>{{ project.name }}</h2>
                </div>
            </div>

        </router-link>

    </div>
</template >


<style lang="scss" scoped></style>
