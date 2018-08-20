
import Jobs from './Jobs'
import Instituion from './Instituion'
var routes = [];

routes.push({route:'/jobs',method:'GET',data: Jobs});
Jobs.forEach(inst => routes.push({route:'/jobs/' + inst.id,method:'GET',data: inst}));

routes.push({route:'/instituions',method:'GET',data: Instituion});
Instituion.forEach(inst => routes.push({route:'/instituions/' + inst.id,method:'GET',data: inst}));

export default routes;