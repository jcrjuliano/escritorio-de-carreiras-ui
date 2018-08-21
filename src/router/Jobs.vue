<template>
	<v-card>
		<v-card-title>
			<v-spacer></v-spacer>
			<v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
		</v-card-title>
		<v-data-table :headers="headers" :items="jobs" :search="search" class="elevation-1">
			<template slot="items" slot-scope="props">
				<td>{{ props.item.title }}</td>
				<td>{{ props.item.salary }}</td>
				<td>{{ props.item.limitDate | moment("DD/MM/YYYY") }}</td>
				<td>{{ props.item.company.companyName }}</td>
				<td>{{ props.item.isPrivate }}</td>
				<td>{{ props.item.status }}</td>
				<td class="justify-center layout px-0">
					<v-icon small class="mr-2">edit</v-icon>
					<v-icon small @click="remove(props.item)">delete</v-icon>
				</td>
			</template>
		</v-data-table>
	</v-card>
</template>
<script>
	export default{
		data(){
			return{
				search:'',
				headers:[
				{ text: 'Titulo', value: 'title'},
				{ text: 'Salário', value: 'salary' },
				{ text: 'Prazo de Inscrição', value: 'limitDate' },
				{ text: 'Compania', value: 'company.companyName'  },
				{ text: 'Privado', value: 'isPrivate' },
				{ text: 'Publicado', value: 'published' },
				{ text: 'Ações', sortable:false}
				],
				jobs:[]
			}
		},
		created(){	
			this.$http.get('jobs').then(resp => this.jobs = resp.data);
		},
		methods:{
			remove(item){
				this.$http.delete(`jobs/${item.id}`).then(resp =>{
					var indx =  this.jobs.indexOf(item)
					this.jobs.splice(indx, 1);
				});
			}
		}
	}
</script>