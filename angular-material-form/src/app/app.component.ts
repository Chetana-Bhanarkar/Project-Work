import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-form';
  errorMessage:string | undefined ;
  name :string =""
  file:any;

  getName(name:string){
    this.file = name ;
  }

  getFile(event : any){
    this.file = event.target.files[0];
    const allowedFileTypes = ['application/pdf'];
    const fileSizeInBytes = this.file.size
    const allowedFileSizeInBytes =102
    // const allowedFileSizeInBytes =1048576

    if (fileSizeInBytes > allowedFileSizeInBytes && allowedFileTypes.indexOf(this.file.type) === -1 ){
      this.errorMessage = '*Invalid, file type should be PDF and size should be less than 1mb .';
      event.target.value = null;
    }else if (allowedFileTypes.indexOf(this.file.type) === -1){
      this.errorMessage = '*Invalid file type. Please upload pdf';
      event.target.value = null;
    }else if (fileSizeInBytes > allowedFileSizeInBytes){
      this.errorMessage = '*File size exceeds the limit (1mb).';
      event.target.value = null;
    }else{
      this.errorMessage = " ";
      console.log("files : ", this.file );
    }

  }

  submit(){
    let formData = new FormData();
    formData.set('name' , this.name);
    formData.set('file',this.file)

    console.log(formData);

  }


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
