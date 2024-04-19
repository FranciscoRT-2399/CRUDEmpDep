import { Routes } from '@angular/router';
import { ListarComponent } from './Componentes/Empleados/listar/listar.component';
import { ListarDepComponent } from './Componentes/Departamentos/listar-dep/listar-dep.component';
import { GuardarComponent } from './Componentes/Empleados/guardar/guardar.component';
import { GuardarDepComponent } from './Componentes/Departamentos/guardar-dep/guardar-dep.component';
import { EditarComponent } from './Componentes/Empleados/editar/editar.component';
import { EditarDepComponent } from './Componentes/Departamentos/editar-dep/editar-dep.component';
import { EliminarComponent } from './Componentes/Empleados/eliminar/eliminar.component';
import { EliminarDepComponent } from './Componentes/Departamentos/eliminar-dep/eliminar-dep.component';

export const routes: Routes = [
	{
		path: 'Empleado/listar',
		component: ListarComponent
	},
	{
		path: 'Departamento/listar',
		component: ListarDepComponent
	},
	{
		path: 'Empleado/guardar',
		component: GuardarComponent
	},
	{
		path: 'Departamento/guardar',
		component: GuardarDepComponent
	},
	{
		path: 'Empleado/editar',
		component: EditarComponent
	},
	{
		path: 'Departamento/editar',
		component: EditarDepComponent
	},
	{
		path: 'Empleado/eliminar',
		component: EliminarComponent
	},
	{
		path: 'Departamento/eliminar',
		component: EliminarDepComponent
	}
];
