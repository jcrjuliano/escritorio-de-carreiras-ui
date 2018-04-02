<template>
	<div class="modal" :class="{'is-active':id}">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Modal title</p>
			</header>
			<section class="modal-card-body">
				<!-- Content ... -->
				<div class="field">
					<label class="label">Titulo</label>
					<div class="control">
						<input class="input" type="text" placeholder="Título da Vaga">
					</div>
				</div>

				<div class="field">
					<label class="label">Área</label>
					<div class="control">
						<div class="select">
							<select>
								<option v-for="area in areas">{{area}}</option>
							</select>
						</div>
					</div>
				</div>

				<div class="field">
					<label class="label">Cidade</label>
					<v-select v-model="vaga.cidade" :options="cidades"></v-select>
					<!--
					<div class="control">
						<div class="select">
							<select>
								<option v-for="cidade in cidades">{{cidade}}</option>
							</select>
						</div>
					</div>-->
				</div>

				<div class="field">
					<label class="label">Titulo</label>
					<div class="control">
						<input v-model="vaga.titulo" class="input" type="text" placeholder="Título da Vaga">
					</div>
				</div>

				<div class="field">
					<label class="label">Descrição</label>
					<div class="control">
						<textarea v-model="vaga.descricao" class="textarea" placeholder="Descrição"></textarea>
					</div>
				</div>

				<div class="field">
					<label class="label">Atividades</label>
					<div class="control">
						<input v-model="vaga.atividade" class="input" type="text" placeholder="Atividades">
					</div>
				</div>

				<div class="field">
					<label class="label">Requisitos</label>
					<div class="control">
						<input v-model="vaga.requisitos" class="input" type="text" placeholder="Requisitos">
					</div>
				</div>

				<div class="field">
					<label class="label">Benefícios</label>
					<div class="control">
						<input v-model="vaga.beneficios" class="input" type="text" placeholder="Benefícios">
					</div>
				</div>

				<div class="field">
					<label class="label">E-mail</label>
					<div class="control">
						<input v-model="vaga.email" class="input" type="text" placeholder="E-mail">
					</div>
				</div>

				<div class="field col-sm-4">
					<label class="label">Data Limite</label>
					<div class="control">
						<input type="date" v-model="vaga.dataLimite" class="input">
					</div>
				</div>

			</section>
			<footer class="modal-card-foot">
				<button type="button" class="button is-success" @click="save()">Save changes</button>
				<button type="button" class="button" @click="id=null">Cancel</button>
			</footer>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return{
			id:-1,
			areas:[],
			cidades:[],
			vaga:{}
		}
	},
	methods:{
		novo(){
			this.id = -1;
		},
		editar(id){
			this.id=id;
		},
		save(){
			if(this.id == -1){
				this.$emit('add', this.vaga)
			}
			this.id = null;
		}
	},
	created(){
		this.areas = ['TI','ADM'];
		var self = this;
		var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios'
		this.$http.get(url).then((response) => {
			self.cidades = response.data.map((cid)=>{
				return cid.nome;
			}).sort();
		});

		this.cidades = ['Jacareí', 'São José dos Campos', 'Taubaté']
	}
}
</script>