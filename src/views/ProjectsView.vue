<script>
import { store } from '../store'
import ProjectCardVue, { ProjectCard } from './ProjectCard.vue'


export default {
    name: "SiteMain",
    data() {
        return {
            store
        };
    },
    components: { ProjectCardVue }
}
</script>

<template>
    <div class="container w-75">
        <h1 class="text-center"> SSA SSSA PPPROVA</h1>

        <div class="row">
            <ProjectCard />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>