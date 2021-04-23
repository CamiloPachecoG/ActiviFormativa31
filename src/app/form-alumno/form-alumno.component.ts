import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms'
import { WebElementPromise } from 'protractor';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {
  listaFinal!:{'rut':string,'nombre':string,'apellido':string,'curso':string,'edad':number,'promedio':number}[];
  listaAlumnos!:{'rut':string,'nombre':string,'apellido':string,'curso':string,'edad':number,'promedio':number}[];
  constructor() { }

  indexAux!:number;

  ngOnInit(): void {
    this.listaAlumnos=[];
    this.indexAux=0;
    this.listaFinal = [];


  }



  formulario = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    curso: new FormControl(''),
    edad: new FormControl(''),
    promedio: new FormControl('')

  });

  formularioEdicion = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    curso: new FormControl(''),
    edad: new FormControl(''),
    promedio: new FormControl('')

  });

  validar(){};

  agregar(){
    this.listaAlumnos.push({'rut':this.formulario.value.rut,'nombre':this.formulario.value.nombre,'apellido':this.formulario.value.apellido,'curso':this.formulario.value.curso,'edad':this.formulario.value.edad,'promedio':this.formulario.value.promedio})
    this.listaFinal = this.listaAlumnos;
  };

  editar(rutAlumno:string){
    let index = this.listaAlumnos.findIndex(element=> element['rut'] == rutAlumno);
    let auxAlumno = this.listaAlumnos[index];
    this.indexAux = index;
    console.log(auxAlumno.rut);
    (document.getElementById("rut") as HTMLFormElement).setAttribute("placeholder", auxAlumno.rut);
    (document.getElementById("nombre") as HTMLFormElement).setAttribute("placeholder", auxAlumno.nombre);
    (document.getElementById("apellido") as HTMLFormElement).setAttribute("placeholder", auxAlumno.apellido);
    (document.getElementById("curso") as HTMLFormElement).setAttribute("placeholder", auxAlumno.curso);
    (document.getElementById("edad") as HTMLFormElement).setAttribute("placeholder", auxAlumno.edad.toString());
    (document.getElementById("promedio") as HTMLFormElement).setAttribute("placeholder", auxAlumno.promedio.toString());

    

    


  
  };

  confirmarEdicion(){

    let index = this.indexAux;
    this.listaAlumnos[index]={'rut':this.listaAlumnos[index].rut,'nombre':this.formularioEdicion.value.nombre,'apellido':this.formularioEdicion.value.apellido,'curso':this.formularioEdicion.value.curso,'edad':this.formularioEdicion.value.edad,'promedio':this.formularioEdicion.value.promedio}



  }

  eliminar(rutAlumno:string){

    let index = this.listaAlumnos.findIndex(element=> element.rut == rutAlumno);
    this.listaAlumnos.splice(index,1);
  };


  filtrar(value:number){
    
    this.listaFinal.filter(elemnt => elemnt.promedio>=4.0);



  }

}
