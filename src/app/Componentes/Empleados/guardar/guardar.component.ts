import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Departamentos } from '../../../Entidades/Departamento';
import { Empleados } from '../../../Entidades/Empleado';

@Component({
  selector: 'app-guardar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar.component.html',
  styleUrl: './guardar.component.css',
})
export class GuardarComponent implements OnInit {
  constructor(private router: Router, private service: ServidorService) {}

  ngOnInit(): void {
    this.subMenuDepartamentos();
  }

  departamentos!: Departamentos[];
  depa: Departamentos = new Departamentos();
  emp: Empleados = new Empleados();

  subMenuDepartamentos() {
    this.service.listarDep().subscribe((data) => {
      this.departamentos = data;
    });
  }

  guardar() {
    this.service.guardarEmp(this.emp).subscribe((data) => {
      this.router.navigate(['Empleado/listar']);
    });
  }

  cancelar() {
    this.router.navigate(['Empleado/listar']);
  }
}
