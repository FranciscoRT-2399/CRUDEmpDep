import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleados } from '../Entidades/Empleado';
import { Departamentos } from '../Entidades/Departamento';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http: HttpClient) { }

	url = 'http://localhost:8003/api'

	listarEmp(){
		return this.http.get<Empleados[]>(this.url + "/Empleado/listar");
	}

	buscarEmp(empleado: Empleados){
		return this.http.post<Empleados>(this.url + "/Empleado/buscar", empleado);
	}

	guardarEmp(empleado: Empleados){
		return this.http.post<String>(this.url + "/Empleado/guardar", empleado);
	}

	editarEmp(empleado: Empleados){
		return this.http.post<String>(this.url + "/Empleado/editar", empleado);
	}

	eliminarEmp(empleado: Empleados){
		return this.http.post<String>(this.url + "/Empleado/eliminar", empleado);
	}

	buscarPorPuesto(puesto: String){
		return this.http.post<Empleados[]>(`${this.url}/Empleado/buscarPorPuesto?puesto=${puesto}`,{});
	}

	// * DEPARTAMENTOS ---------------------------------------------------------------

	listarDep(){
		return this.http.get<Departamentos[]>(this.url + "/Departamento/listar");
	}

	buscarDep(departamento: Departamentos){
		return this.http.post<Departamentos>(this.url + "/Departamento/buscar", departamento);
	}
	
	guardarDep(departamento: Departamentos){
		return this.http.post<String>(this.url + "/Departamento/guardar", departamento);
	}

	editarDep(departamento: Departamentos){
		return this.http.post<String>(this.url + "/Departamento/editar", departamento);
	}
	
	eliminarDep(departamento: Departamentos){
		return this.http.post<String>(this.url + "/Departamento/eliminar", departamento);
	}
	
}
