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
    <div class="w-auto container-md">

        <div class="row  d-flex justify-content-center mt-2 mt-md-4">
            <div class="col">
                <div class="w-100">
                    <input type="search" class="form-control cacao_form" name="searchText" id="searchText" aria-describedby="helpId"
                        placeholder="search a project">
                </div>
            </div>
        </div>


        <div class="row row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mb-4">
            <ProjectCard />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>