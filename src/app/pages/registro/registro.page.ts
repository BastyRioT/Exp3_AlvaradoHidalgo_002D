import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email: string = '';
  public usuario: string = '';
  public password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegister() {
    this.auth.register(this.email, this.password, this.usuario).then(auth => {
      this.router.navigate(['/inicio'])
      console.log(auth)
    }).catch(err => swal.fire("Datos incorrectos o usuario ya existente"))
  }

}

