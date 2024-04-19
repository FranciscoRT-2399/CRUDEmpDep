import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Departamentos } from '../../../Entidades/Departamento';

@Component({
  selector: 'app-editar-dep',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-dep.component.html',
  styleUrl: './editar-dep.component.css'
})
export class EditarDepComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	depa : Departamentos = new Departamentos();

	ngOnInit(): void {
		this.buscar();
	}

	buscar(){
		let id = localStorage.getItem('idDep');
		console.log(id);
		this.depa.idDep = Number(id);
		this.service.buscarDep(this.depa).subscribe(data=>{
			this.depa = data;
		})
	}

	editar(){
		this.service.editarDep(this.depa).subscribe(data=>{
			this.router.navigate(['Departamento/listar']);
		})
	}

	cancelar(){
		this.router.navigate(['Departamento/listar']);
	}
}
