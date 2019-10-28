import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-nuevo-curso',
  templateUrl: './form-nuevo-curso.component.html',
  styleUrls: ['./form-nuevo-curso.component.css']
})
export class FormNuevoCursoComponent implements OnInit {

  protected nuevoCursoForm: FormGroup;
  protected imagen_seleccionada: String;
  
  // Utilizamos formBuilder para realizar las intancias de los formsControls automaticamente
  constructor(private frmBuilder: FormBuilder) { }

  ngOnInit() {
    this.nuevoCursoForm = this.frmBuilder.group({
      titulo_curso: ['',Validators.required],
      descripcion_curso: ['',Validators.required],
      imagen_seleccionada: ['',Validators.required]
    });
  }

  onFileChange(event){
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagen_seleccionada = reader.result.toString().split(',')[1];
        // patchValue -> Asigna un valor a un formControl contenido en el formGroup
        this.nuevoCursoForm.patchValue({imagen_seleccionada: this.imagen_seleccionada});
      }
    }
  }

}
