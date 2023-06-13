import { reactive } from "vue";
import axios from "axios";
export const store = reactive ({
    projects: [],

    fetchProjects(url){
        axios
        .get(url)
        .then(response => {
            this.projects = response.data.projects.data;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
    }
})