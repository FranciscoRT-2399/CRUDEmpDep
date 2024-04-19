import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Departamentos } from '../../../Entidades/Departamento';
import { ServidorService } from '../../../Servidor/servidor.service';

@Component({
  selector: 'app-listar-dep',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar-dep.component.html',
  styleUrl: './listar-dep.component.css'
})
export class ListarDepComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	ngOnInit(): void {
		this.listar();
	}

	departamentos !: Departamentos[];
	depa : Departamentos = new Departamentos();

	listar(){
		this.service.listarDep().subscribe(data =>{
			this.departamentos = data;
		});
	}

	editar(depa: Departamentos){
		localStorage.setItem('idDep', depa.idDep.toString());
		this.router.navigate(['Departamento/editar']);
	}

	eliminar(depa: Departamentos){
		localStorage.setItem('idDep', depa.idDep.toString());
		this.router.navigate(['Departamento/eliminar']);
	}
}
