<template>
	<v-data-table :headers="headers" :items="instituions"  class="elevation-1">
		<template slot="items" slot-scope="props">
			<td>{{ props.item.name }}</td>
			<td class="text-xs-right">{{ props.item.calories }}</td>
			<td class="text-xs-right">{{ props.item.fat }}</td>
			<td class="text-xs-right">{{ props.item.carbs }}</td>
			<td class="text-xs-right">{{ props.item.protein }}</td>
			<td class="text-xs-right">{{ props.item.iron }}</td>
		</template>
	</v-data-table>
</template>
<script>
	export default{
		data(){
			return{
				headers:[
				{ text: 'Compania', value: 'company', sortable: true},
				{ text: 'Código', value: 'code', sortable: true },
				{ text: 'Nivel', value: 'level', sortable: true  },
				{ text: 'Protein (g)', value: 'protein' },
				{ text: 'Iron (%)', value: 'iron' }
				],
				instituions:[]
			}
		},
		created(){	
			this.$http.get('instituion').then((resp) => this.instituion = resp.data);
			console.log(this.instituion)
		}	
	}
</script>