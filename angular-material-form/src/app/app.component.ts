import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-form';
  name :string =""
  file:any;

  getName(name:string){
    this.name = name ;
  }
  getFile(event : any){
    this.file = event.target.files[0];
    console.log("files : ", this.file );

  }

  submit(){
    let formData = new FormData();
    formData.set('name' , this.name);
    formData.set('file',this.file)

    console.log(formData);

  }
  selectedFile: File | undefined;

  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      console.log('Selected File:', this.selectedFile);
      // Perform any additional operations with the file
    } else {
      console.log('No file selected');
    }
  }
  // ======================================================

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  // ================form stepper================
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
