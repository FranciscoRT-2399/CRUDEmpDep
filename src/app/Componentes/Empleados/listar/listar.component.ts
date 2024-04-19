import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Empleados } from '../../../Entidades/Empleado';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
})
export class ListarComponent implements OnInit {
  //Inyeccion de dependencias
  constructor(private router: Router, private service: ServidorService) {}

  ngOnInit(): void {
    this.listar();
  }

  empleados!: Empleados[];
  empleado: Empleados = new Empleados();

  listar() {
    this.service.listarEmp().subscribe((data) => {
      this.empleados = data;
    });
  }

  editar(empleado: Empleados) {
    localStorage.setItem('idEmpleado', empleado.idEmpleado.toString());
    this.router.navigate(['Empleado/editar']);
  }

  eliminar(empleado: Empleados) {
    localStorage.setItem('idEmpleado', empleado.idEmpleado.toString());
    this.router.navigate(['Empleado/eliminar']);
  }

  buscarPorPuesto(puesto: String) {
    if (puesto.trim() == '') {
      this.listar();
    } else {
      this.service.buscarPorPuesto(puesto).subscribe((data) => {
        this.empleados = data;
      });
    }
  }
}
