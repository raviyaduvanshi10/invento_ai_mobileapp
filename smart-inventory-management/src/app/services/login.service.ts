import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }


  login(form) {
    // let auth = JSON.parse(localStorage.getItem("credential")).id;
    return this.http.post(`${environment.inventoServer}/appuserlogin`, form);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
