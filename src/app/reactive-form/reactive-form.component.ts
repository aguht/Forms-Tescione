import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  formEstudiantes: FormGroup
  submitted=false
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formEstudiantes=this.fb.group({
      nombre:['', [Validators.required,Validators.minLength(2)]],
      apellido:['', [Validators.required,Validators.minLength(3)]],
      edad:['', Validators.required],
      curso:['', [Validators.required,Validators.minLength(3)]],
      mail:['', [Validators.required,Validators.email]]
    })
  }

  submit(){
    console.log(this.formEstudiantes.value)
  }

}
