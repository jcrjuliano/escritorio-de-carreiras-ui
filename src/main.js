/*Vue Libs*/
import Vue from 'vue'
import Vuetify from 'vuetify'

import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment' 

/* Mock API */
import MockAdapter from 'axios-mock-adapter';


/* Other Libs*/
import axios from 'axios';
import App from './App.vue';
import CustomRoutes from './routes';
import 'vuetify/dist/vuetify.min.css' 

import MockApi from './mock/Api'

var CustomAxios = axios.create({
	baseURL: '/ecarreiras/',
});

/*remover essa bloco para uso em produção*/

if(['localhost:8080'].indexOf(window.location.host) > -1){

	var mock = new MockAdapter(CustomAxios);

	MockApi.forEach((obj)=>{
		if(obj.method == 'GET')	mock.onGet(obj.route).reply(200, obj.data);
	});	

}

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueMoment);
Vue.use(VueAxios, CustomAxios)

const routes  = CustomRoutes.getRoutes();
const router = new VueRouter({
	routes,
	mode:'history'
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});