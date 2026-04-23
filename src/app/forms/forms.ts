import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmFunction } from '../cinfrimpassword.validation';
@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule,NgIf],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms implements OnInit {
  myform!: FormGroup;
  user = {
    name: '',
    phone: '',
    email: '',
    password: ''

  }
  //private fb = inject(FormBuilder);

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.myform = this.fb.group({
      name: ['',[ Validators.required, Validators.maxLength(3), Validators.pattern(/^[A-Za-z ]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required,] ],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      confirmpasseord:['',Validators.required],
      validators: ConfirmFunction('password', 'confirmPassword')



    })
  }
  get f() {
    return this.myform.controls
  }
  onSubmit(data: any) {
    console.log("input data", this.user)
  }

   onReactiveSubmit() {
    console.log('Form Submitted', this.myform.value);
    if (this.myform.valid) {
      console.log('Form Submitted', this.myform.value);
    }
  }

}
