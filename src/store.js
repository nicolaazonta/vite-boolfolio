import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
    projects: null,
    project: null,
    base_api: "http://127.0.0.1:8000/api/projects",


    fetchProjects(url) {
            axios
            .get(url)
            .then(response => {
                this.projects = response.data.projects.data;
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    },
   /*  fetchSingleProject(url) {
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
    } */
})