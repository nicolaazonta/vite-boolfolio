<script>
import { store } from '../store'
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: "ProjectsView",
    data() {
        return {
            store
        };
    },
    components: { ProjectCard }
}
</script>

<template>
    <div class="container w-50">
        <h6>projects view</h6>

        <div class="row my-5">
            <ProjectCard />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>