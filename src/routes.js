import Home from './router/Home.vue';
import P404 from './router/404.vue';
import P403 from './router/403.vue';
import Jobs from './router/Jobs.vue';
import Institutions from './router/Institutions.vue';

import Institution from './router/components/Institution.vue';
var menu_tree = [
{path:'/', name:'home', component:Home},
/*
{path:'/orgaos/:page', name:'orgaos', component:Orgaos},
{path: '/orgaos', redirect: {name:'orgaos', params:{page:1}}},
{path:'/orgao/:orgao', name:'orgao',  component:Orgao},


{path:'/licitacoes/:page', name:'licitacoes', component:Licitacoes},
{path: '/licitacoes', redirect: {name:'licitacoes', params:{page:1}}},
*/
{path: '/institution/:id', name:'institution', component: Institution, props: true  },
{path: '/jobs', name:'jobs', component: Jobs },
{path: '/403', name:'403', component: P403 },
{path: '/404', name:'404', component: P404 },
{path: '*', redirect: {name:'404'}},
]

export default{
	getRoutes(){
		return menu_tree;
	}
}