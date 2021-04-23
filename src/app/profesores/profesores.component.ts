import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent {

  profesores: { rut: number, nombre: string, apellido: string, edad: number, especialidad: string, sueldo: number  }[] = [
    { "rut": 1111, "nombre": "Oscar", "apellido": "Quinteros", "edad": 25, "especialidad": "Informatica", "sueldo": 3000 },
  ];

  formulario = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    especialidad: new FormControl(''), 
    sueldo: new FormControl('')
  });

  formularioActualizar = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    especialidad: new FormControl(''), 
    sueldo: new FormControl('')
  });

  validarDuplicado:boolean = false;
  agregar(){
    for(let i = 0; i < this.profesores.length; ++i){
      if (this.profesores[i].rut === this.formulario.value.rut) {
        this.validarDuplicado = true;
      }
    }
    // Validacion vacio
    if(this.formulario.value.rut === "" || this.formulario.value.nombre === "" || this.formulario.value.apellido === "" || this.formulario.value.edad === ""|| this.formulario.value.especialidad === ""|| this.formulario.value.sueldo === ""){
      (document.getElementById('alertError') as HTMLElement).style.display = '';
    }else{
      //Validacion Duplicado
      if(this.validarDuplicado == false){
        length = this.profesores.push({ "rut": this.formulario.value.rut, "nombre": this.formulario.value.nombre, "apellido": this.formulario.value.apellido, "edad": this.formulario.value.edad, "especialidad": this.formulario.value.especialidad , "sueldo": this.formulario.value.sueldo}); 
        (document.getElementById('alertError') as HTMLElement).style.display = 'none';
      }else{
        (document.getElementById('alertError') as HTMLElement).style.display = '';
      }
    }
  }

  eliminar(rut: number){
      for(let i = 0; i < this.profesores.length; ++i){
          if (this.profesores[i].rut === rut) {
              this.profesores.splice(i,1);
          }
      }
  }

  rutEditar:number = 0;
  nombreEditar:string = "";
  apellidoEditar:string = "0";
  edadEditar:number = 0;
  especialidadEditar:string = "";
  sueldoEditar:number = 0;

  editar(rut: number, nombre: string, apellido: string, edad: number, especialidad:string, sueldo:number){
    (document.querySelector('.divActualizar') as HTMLElement).style.display = '';
    (document.getElementById("rutA") as HTMLFormElement).value = rut;
    (document.getElementById("nombreA") as HTMLFormElement).setAttribute("placeholder", nombre);
    (document.getElementById("apellidoA") as HTMLFormElement).setAttribute("placeholder", apellido); 
    (document.getElementById("edadA") as HTMLFormElement).setAttribute("placeholder", edad.toString()); 
    (document.getElementById("especialidadA") as HTMLFormElement).setAttribute("placeholder", especialidad); 
    (document.getElementById("sueldoA") as HTMLFormElement).setAttribute("placeholder", sueldo.toString()); 
    this.rutEditar = rut;
    this.nombreEditar = nombre;
    this.apellidoEditar = apellido;
    this.edadEditar = edad;
    this.especialidadEditar = especialidad;
    this.sueldoEditar = sueldo;
  }

  actualizar(){
    for(let i = 0; i < this.profesores.length; ++i){
      if (this.profesores[i].rut === this.rutEditar) {
          // Validacion vacio
        if(this.formularioActualizar.value.nombre === "" || this.formularioActualizar.value.apellido === "" || this.formularioActualizar.value.edad === ""|| this.formularioActualizar.value.especialidad === ""|| this.formularioActualizar.value.sueldo === ""){
          (document.getElementById('alertErrorEditar') as HTMLElement).style.display = '';
        }else{
          this.profesores[i].nombre = this.formularioActualizar.value.nombre;
          this.profesores[i].apellido = this.formularioActualizar.value.apellido;
          this.profesores[i].edad = this.formularioActualizar.value.edad;
          this.profesores[i].especialidad = this.formularioActualizar.value.especialidad;
          this.profesores[i].sueldo = this.formularioActualizar.value.sueldo;
          (document.querySelector('.divActualizar') as HTMLElement).style.display = 'none';
          (document.getElementById('alertErrorEditar') as HTMLElement).style.display = 'none';
          break;
        }
      }
    }
  }

}
