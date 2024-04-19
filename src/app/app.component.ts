import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'CRUDEmpDep';

	constructor(private router: Router){}

	listarE(){
		this.router.navigate(['Empleado/listar']);
	}
	
	nuevoE(){
		this.router.navigate(['Empleado/guardar']);
	}	

	listarD(){
		this.router.navigate(['Departamento/listar']);
	}
	
	nuevoD(){
		this.router.navigate(['Departamento/guardar']);
	}
}
