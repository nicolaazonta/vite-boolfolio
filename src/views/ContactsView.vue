<script>
import { store } from '../store'

export default {
    name: "ProjectsView",
    data() {
        return {
            store
        };
    },
   
}
</script>

<template>
    <div class="container w-50">
        <div class="row row-cols-lg-2 row-cols-md-1">
            <div class="col">
                <div class="card"></div>
            </div>
        </div>
       
    </div>
</template>

<style lang="scss" scoped></style>