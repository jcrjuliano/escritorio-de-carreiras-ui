import Home from './router/Home.vue';
import P404 from './router/404.vue';
import vagas from './router/vagas.vue';

var menu_tree = [
{path:'/', name:'home', component:Home},
/*
{path:'/orgaos/:page', name:'orgaos', component:Orgaos},
{path: '/orgaos', redirect: {name:'orgaos', params:{page:1}}},
{path:'/orgao/:orgao', name:'orgao',  component:Orgao},


{path:'/licitacoes/:page', name:'licitacoes', component:Licitacoes},
{path: '/licitacoes', redirect: {name:'licitacoes', params:{page:1}}},
*/
{path: '/vagas', name:'vagas', component: vagas },
{path: '/404', name:'404', component: P404 },
{path: '*', redirect: {name:'404'}},
]

export default{
	getRoutes(){
		return menu_tree;
	}
}