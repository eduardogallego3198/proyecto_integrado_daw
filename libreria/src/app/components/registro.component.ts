import { Component, OnInit } from '@angular/core';
import { AuthClienteService } from '../services/authCliente.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    // styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
  
    constructor(private authService: AuthClienteService) { }
  
    ngOnInit() {
    }
  
    onSubmit() {
      this.authService.register(this.form).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
}