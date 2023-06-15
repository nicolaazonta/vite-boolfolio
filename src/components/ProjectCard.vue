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
    <div class="col-4 g-3" v-for="project in store.projects">

        <router-link class="text-decoration-none" :to="{ name: 'project-inside', params: { slug: project.slug } }">


            <div class="card text_color card_bg card_hover p-1 h-100">
                <div class="card-title">
                    <h4>{{ project.name }}</h4>
                    <h4>{{ project.type?.name }}</h4>                   

                </div>
            </div>

        </router-link>

    </div>
</template >


<style lang="scss" scoped></style>
