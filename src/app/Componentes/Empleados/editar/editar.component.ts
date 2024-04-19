import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Router } from '@angular/router';
import { Departamentos } from '../../../Entidades/Departamento';
import { Empleados } from '../../../Entidades/Empleado';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	departamentos!: Departamentos[];
  depa: Departamentos = new Departamentos();
  emp: Empleados = new Empleados();

	ngOnInit(): void {
		this.buscar();
    this.subMenuDepartamentos();
  }

	buscar() {
		let id = localStorage.getItem('idEmpleado');
		this.emp.idEmpleado = Number(id);
		this.service.buscarEmp(this.emp).subscribe((data) => {
			this.emp = data;
		});
	}
  subMenuDepartamentos() {
    this.service.listarDep().subscribe((data) => {
      this.departamentos = data;
    });
  }

  editar() {
    this.service.editarEmp(this.emp).subscribe((data) => {
      this.router.navigate(['Empleado/listar']);
    });
  }

  cancelar() {
    this.router.navigate(['Empleado/listar']);
  }
}
