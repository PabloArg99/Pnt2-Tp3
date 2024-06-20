import { createRouter, createWebHistory } from 'vue-router'

import Formulario from './componentes/Formulario/index.vue'
import Api from './componentes/Api.vue'


const routes = [
    { path: '/', redirect: '/formulario' },
    
    { path: '/formulario', component: Formulario },
    { path: '/api', component: Api },

    { path: '/:pathmatch(.*)*', redirect: '/ingreso' },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router