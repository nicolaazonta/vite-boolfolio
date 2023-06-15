import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ProjectInsideView from './views/ProjectInsideView'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            'path' : '/',
            'name' : 'home',
            'component' : HomeView
        },
        {
            'path' : '/projects',
            'name' : 'projects',
            'component' : ProjectsView
        },
        {
            'path' : '/projects/:slug',
            'name' : 'project-inside',
            'component' : ProjectInsideView
        },
    ]
})

export { router };
