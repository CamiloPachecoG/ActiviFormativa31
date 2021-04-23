import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-administrativos',
  templateUrl: './administrativos.component.html',
  styleUrls: ['./administrativos.component.css']
})
export class AdministrativosComponent {

  datos: string = "";
  error:string="";

  listaAdministrativos :{
    rut:number,
    nombre:string ,
    apellido:string ,
    edad:number,
    cargo:string,
    sueldo:number
    }[]=[{'rut':18891063,'nombre':'juan','apellido':'perez','edad':27,'cargo':'secretario','sueldo':800000},
        {'rut':18891064,'nombre':'jose','apellido':'torres','edad':30,'cargo':'coordinador','sueldo':900000},
        {'rut':18891065,'nombre':'jaime','apellido':'quinteros','edad':40,'cargo':'coordinador','sueldo':1000000}];

  formulario = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    cargo: new FormControl(''),
    sueldo: new FormControl('')
  });

  formularioActualizar = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    cargo: new FormControl(''),
    sueldo: new FormControl('')
 
  });

 

  agregar(){
   this.error="";
    if(this.formulario.value.rut =="" || this.formulario.value.nombre =="" || this.formulario.value.apellido === "" || this.formulario.value.edad === ""|| this.formulario.value.cargo === ""|| this.formulario.value.sueldo === "")
    {
      this.error = "¡¡ TODOS LOS CAMPOS DEBEN LLENARSE !!";
    }
  
    else if((this.formulario.value.edad) < 18){
      this.error="¡¡ MINIMO DE EDAD SON 18 AÑOS!!";
    }else{
  
      this.listaAdministrativos.push({"rut":this.formulario.value.rut,
                                      "nombre":this.formulario.value.nombre,
                                      "apellido":this.formulario.value.apellido,
                                      "edad":this.formulario.value.edad,
                                      "cargo":this.formulario.value.cargo,
                                      "sueldo":this.formulario.value.sueldo
                                      });
      (document.querySelector('.form') as HTMLElement).style.display = 'none';
      (document.querySelector('.btnAgregar') as HTMLElement).style.display = '';
    }
  
  }
        
  eliminar(rut: number){
    for(let i = 0; i < this.listaAdministrativos.length; ++i){
        if (this.listaAdministrativos[i].rut === rut) {
            this.listaAdministrativos.splice(i,1);
        }
    }
  }

  habilitar(){
    (document.querySelector('.form') as HTMLElement).style.display = '';
    (document.querySelector('.btnAgregar') as HTMLElement).style.display = 'none';
  }


  rutEditar:number = 0;
  nombreEditar:string = "";
  apellidoEditar:string = "0";
  edadEditar:number = 0;
  cargoEditar:string = "";
  sueldoEditar:number = 0;

  editar(rut: number, nombre: string, apellido: string, edad: number, cargo:string, sueldo:number){
    (document.querySelector('.formActualizar') as HTMLElement).style.display = '';
    (document.getElementById("rutA") as HTMLFormElement).value = rut;
    (document.getElementById("nombreA") as HTMLFormElement).setAttribute("placeholder", nombre);
    (document.getElementById("apellidoA") as HTMLFormElement).setAttribute("placeholder", apellido); 
    (document.getElementById("edadA") as HTMLFormElement).setAttribute("placeholder", edad.toString()); 
    (document.getElementById("cargoA") as HTMLFormElement).setAttribute("placeholder", cargo); 
    (document.getElementById("sueldoA") as HTMLFormElement).setAttribute("placeholder", sueldo.toString()); 
    this.rutEditar = rut;
    this.nombreEditar = nombre;
    this.apellidoEditar = apellido;
    this.edadEditar = edad;
    this.cargoEditar = cargo;
    this.sueldoEditar = sueldo;
  }

  actualizar(){

    this.error = "";

    for(let i = 0; i < this.listaAdministrativos.length; ++i){
      if (this.listaAdministrativos[i].rut === this.rutEditar) {
          // Validacion vacio
        if(this.formularioActualizar.value.nombre === "" || this.formularioActualizar.value.apellido === "" || this.formularioActualizar.value.edad === ""|| this.formularioActualizar.value.cargo === ""|| this.formularioActualizar.value.sueldo === ""){
          this.error = "llene todos los campos";
        }else{
          this.listaAdministrativos[i].nombre = this.formularioActualizar.value.nombre;
          this.listaAdministrativos[i].apellido = this.formularioActualizar.value.apellido;
          this.listaAdministrativos[i].edad = this.formularioActualizar.value.edad;
          this.listaAdministrativos[i].cargo = this.formularioActualizar.value.cargo;
          this.listaAdministrativos[i].sueldo = this.formularioActualizar.value.sueldo;
          (document.querySelector('.formActualizar') as HTMLElement).style.display = 'none';
        //  (document.getElementById('alertErrorEditar') as HTMLElement).style.display = 'none';
          break;
        }
      }
    }
  }

}
