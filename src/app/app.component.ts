import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from './mustmatch.validators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formValidate';
  submitted = false;
  userDetails!: FormGroup;
  constructor(private fb: FormBuilder){
  }
  ngOnInit(): void {
    this.userDetails= this.fb.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern('[A-Za-z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('[A-Za-z]+$')]],
      userName: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-z]+[0-9]+$')]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      subscription : ['', [Validators.required]]
    },
    {
      validator: MustMatch('newPassword', 'confirmPassword')
    })
  }
  onSubmit(){
    this.submitted = true
  }

  get f(){
    return this.userDetails.controls
  }
}
