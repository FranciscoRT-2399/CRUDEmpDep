import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Empleados } from '../../../Entidades/Empleado';
import { Departamentos } from '../../../Entidades/Departamento';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	emp : Empleados = new Empleados();
	depa : Departamentos = new Departamentos();
	departamentos !: Departamentos[];

	ngOnInit(): void {
		this.buscar();
	}

	buscar(){
		let id = localStorage.getItem('idEmpleado');
		this.emp.idEmpleado = Number(id);
		this.service.buscarEmp(this.emp).subscribe(data => {
			this.emp = data;
		})
	}

	eliminar(){
		this.service.eliminarEmp(this.emp).subscribe(data => {
			this.router.navigate(['Empleado/listar']);
		})
	}

	cancelar(){
		this.router.navigate(['Empleado/listar']);
	}
}
