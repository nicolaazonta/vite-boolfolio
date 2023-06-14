<script>
import { store } from '../store'
import  ProjectCard  from '../components/ProjectCard.vue';
import   AppHeader  from '../components/AppHeader.vue';


export default {
    name: "SiteMain",
    data() {
        return {
            store
        };
    },
    components: { ProjectCard }
}
</script>

<template>
    <div class="container w-75">
        <AppHeader/>
        <h1>projects view</h1>
        <h1 class="text-center"> SSA SSSA PPPROVA</h1>

        <div class="row">
            <ProjectCard />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>