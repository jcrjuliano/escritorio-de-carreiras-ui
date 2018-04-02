<template>
	<div class="container">
		<div class="modal" :class="[localizacao ? '' :'is-active']">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Selecione sua localização:</p>
				</header>
				<section class="modal-card-body">
					<!-- Content ... -->
					<div class="select">
						<select v-model="localizacao_model">
							<option v-for='cidade in cidades'>{{cidade}}</option>
						</select>
					</div>
				</section>
				<footer class="modal-card-foot">
					<button class="button is-success" :disabled="!(localizacao_model)" @click="localizacao = localizacao_model">Selecionar</button>
				</footer>
			</div>
		</div>
		<!-- conteudo da página, fora do modal -->

		<!-- área para filtros -->

		<div class="field is-horizontal">
			<div class="field-body">
				<div class="field">
					<label class="label">Titulo:</label>
					<input class="input " placeholder="Titulo" v-model="tituloVaga">
				</div>
				<div class="field">
					<label class="label">Área:</label>
					<div class="select">
						<select v-model="areaSelecionada">
							<option v-for="area in areas">{{area}}</option>
						</select>
					</div>
				</div>
				<div class="field">
					<label class="label" style="color:#fff">Área:</label>	
					<button class="button is-info" @click="localizacao = undefined">Alterar Cidade</button>
					<button class="button is-info">Buscar</button>
					<button class="button is-info" @click="$refs.vaga.novo()">Cadastrar</button>
				</div>
			</div>
		</div>
		<hr>

		<!-- área para vagas -->
		<div class="row" id="lista-vagas" v-show="localizacao">
			<div class="col-sm-6 col-md-4 col-xs-12"  v-for="vaga in filter()">
				<div class="box   is-paddingless">
					<article class="media">
						<div class="media-content">
							<div class="content is-paddingless">
								<div class="columns  is-marginless">
									<div class="column is-3 icon" :style="{backgroundColor:vaga.color}">
										<i class="fas" :class="vaga.icon"></i>
									</div>
									<div class="column">	
										<b>{{vaga.titulo}}</b>
										<small>{{vaga.localizacao}}</small>
										<small>{{vaga.area}}</small>
										<p>
											{{vaga.descricao}}
										</p>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
		<!-- Área do Modal -->
		<vaga ref="vaga" @add="addVaga"></vaga>
	</div>
</template>
<style type="text/css">

#lista-vagas .icon{
	
	color: #fff;
	font-size: 40px;
	text-align: center;
}

#lista-vagas .box{
	margin-bottom: 15px;
}

#lista-vagas .box, #lista-vagas .box .column{
	height: 110px;
}

</style>
<script type="text/javascript">
import vaga from '../components/vaga.vue';


export default{
	components: {
		'vaga':vaga
	},
	data(){
		return {
			areaSelecionada:"",
			tituloVaga:"",  
			"localizacao":"Jacareí",
			"localizacao_model":"Jacareí",
			"cidades":[  
			"Jacareí",
			"São José dos Campos",
			"Taubaté"
			],
			"areas":[  
			"TI",
			"ADM"
			],
			"vagas":[  
			{  
				"titulo":"Teste vaga TI",
				"area":"TI",
				"descricao":"bla bla bla bla",
				"cidade":"São José dos Campos",
				"icon":"fa-laptop",
				"color":"#039be5"
			},
			{  
				"titulo":"Teste vaga ADM",
				"area":"ADM",
				"descricao":"bla bla bla bla",
				"cidade":"Jacareí",
				"icon":"fa-briefcase",
				"color":"#f57f17"
			},
			{  
				"titulo":"Teste vaga",
				"area":"TI",
				"descricao":"bla bla bla bla",
				"cidade":"Taubaté",
				"icon":"fa-laptop",
				"color":"#039be5"
			},
			{  
				"titulo":"Teste vaga",
				"area":"ADM",
				"descricao":"bla bla bla bla",
				"cidade":"São José dos Campos",
				"icon":"fa-briefcase",
				"color":"#f57f17"
			},
			{  
				"titulo":"Teste vaga",
				"area":"ADM",
				"descricao":"bla bla bla bla",
				"cidade":"Taubaté",
				"icon":"fa-briefcase",
				"color":"#f57f17"
			},
			{  
				"titulo":"Teste vaga",
				"area":"TI",
				"descricao":"bla bla bla bla",
				"cidade":"Jacareí",
				"icon":"fa-laptop",
				"color":"#039be5"
			}
			]
		}
	},
	methods: {
		filter(){
			var self = this;
			return this.vagas.filter(function(vaga){
				return (self.areaSelecionada == vaga.area || self.areaSelecionada == "") 
				&& (vaga.titulo.toUpperCase().indexOf(self.tituloVaga.toUpperCase()) > -1)
			})
		},
		addVaga(vaga){
			this.vagas.push(vaga)
		}
	}
}
</script>