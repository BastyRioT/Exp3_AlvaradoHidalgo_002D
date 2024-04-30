import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/inicio'])
    }).catch(err => swal.fire("Datos incorrectos o usuario no existente"))
  }
}

