/*Vue Libs*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import vSelect from 'vue-select'
import './fontAwesomeIcons'
/* Mock API */


/* Other Libs*/
import axios from 'axios';
import 'bulma';
import 'flexboxgrid';

import App from './App.vue';
import CustomRoutes from './routes';

var CustomAxios = axios.create({
	baseURL: '/api/',
});

Vue.use(VueAxios, CustomAxios)
Vue.use(VueRouter)
Vue.component('v-select', vSelect)
/*remover essa linha para uso em produção*/


const routes  =CustomRoutes.getRoutes();
const router = new VueRouter({
	routes,
	mode:'history'
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});