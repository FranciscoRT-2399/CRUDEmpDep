import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Departamentos } from '../../../Entidades/Departamento';

@Component({
  selector: 'app-eliminar-dep',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-dep.component.html',
  styleUrl: './eliminar-dep.component.css'
})
export class EliminarDepComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	depa : Departamentos = new Departamentos();

	ngOnInit(): void {
		this.buscar();
	}

	buscar(){
		let id = localStorage.getItem('idDep');
		this.depa.idDep = Number(id);
		this.service.buscarDep(this.depa).subscribe(data =>{
			this.depa = data;
		})
	}

	eliminar(){
		this.service.eliminarDep(this.depa).subscribe(data =>{
			this.router.navigate(['Departamento/listar']);
		})
	}

	cancelar(){
		this.router.navigate(['Departamento/listar']);
	}

}
