import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
      }).catch(err => rejected(err))
    });
  }

  logout() {
    this.AFauth.signOut().then(() => {
      this.router.navigate(['/login'])
    })
  }

  register(email: string, password: string, usuario: string) {

    return new Promise((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res => {
        const uid = res.user.uid
        this.db.collection('usuarios').doc(uid).set({
          usuario: usuario,
          uid: uid
        })

        resolve(res)
      }).catch(err => reject(err))
    })
  }
}
