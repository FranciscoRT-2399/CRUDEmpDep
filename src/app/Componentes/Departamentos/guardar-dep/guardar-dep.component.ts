import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Departamentos } from '../../../Entidades/Departamento';

@Component({
  selector: 'app-guardar-dep',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar-dep.component.html',
  styleUrl: './guardar-dep.component.css'
})
export class GuardarDepComponent {

	constructor(private router: Router, private service: ServidorService){}

	depa : Departamentos = new Departamentos();

	guardar(){
		this.service.guardarDep(this.depa).subscribe(data =>{
			this.router.navigate(['Departamento/listar']);
		})
	}

	cancelar(){
		this.router.navigate(['Departamento/listar']);
	}
}
