import { Departamentos } from "./Departamento";

export class Empleados{
	idEmpleado !: number;
	nombre !: string;
	edad !: number;
	puesto !: string;
	depId !: Departamentos;
}