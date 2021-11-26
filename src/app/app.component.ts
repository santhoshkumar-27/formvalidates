import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formValidate';
  userDetails: FormGroup;
  constructor(){
    this.userDetails= new FormGroup({
      'title': new FormControl('', [Validators.required]),
      'firstName': new FormControl('',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+$')]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-Z]{1,}$')]),
      'userName': new FormControl('', [Validators.required, Validators.pattern('^([A-Z]|[a-z])+([a-z]|[0-9])+$')]),
      'newPassword': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('.*(?=[a-z])')])
    })
  }

  onSubmit(){
    console.log(this.userDetails)
  }

  get title1(){
    return this.userDetails.get('title')
  }
  get firstname(){
    return this.userDetails.get('firstName')
  }
  get lastname(){
    return this.userDetails.get('lastName')
  }
  get username(){
    return this.userDetails.get('userName')
  }
  get newPassword(){
    return this.userDetails.get('newPassword')
  }
}
