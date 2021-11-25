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
      'title': new FormControl('selected', [Validators.required]),
      'firstName': new FormControl('')
})
  }

  onSubmit(){
    console.log(this.userDetails)
  }

  get title1(){
    return this.userDetails.get('title')
  }
  get firstname(){
    return this.userDetails.get('firstname')
  }
}
