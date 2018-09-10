<template>
	<v-form >
		<v-text-field v-model="company.company"  label="Compania" required></v-text-field>
		<v-text-field v-model="company.cnpj"  label="CNPJ" required></v-text-field>
		<v-text-field v-model="company.city"  label="Cidade" required></v-text-field>
		<v-text-field v-model="company.code"  label="Código" required></v-text-field>
		<v-btn @click="save()">Salvar</v-btn>
	</v-form>
</template>
<script>
export default{
	data(){
		return {
			company:{}
		}
	},
	methods:{
		save(){
			this.$http.post('company', this.company).then(resp=>console.log(resp.data));
		}
	}
}
</script>