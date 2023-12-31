import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  submitted = false;
  userForm = { userName: '', password: '' };

  constructor(private router: Router, private loginServices: LoginService,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.userForm);
    this.login();
    //this.openingForm.reset();
  }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Log In ...',
      translucent: true,
      duration: 5000
    });
    await loading.present();
    this.loginServices.login(this.userForm).subscribe(async (data) => {

      Storage.set({ key: 'credential', value: JSON.stringify(data) });
      console.log(data);
      this.gotoHome();
    },
      error => alert("The username or password you entered isn't correct"));
    await loading.dismiss();
  }
  async gotoHome() {
    const loading = await this.loadingController.create({
      message: 'Log In ...',
      translucent: true,
      duration: 5000
    });
    await loading.present();
    this.router.navigate(['/home']);
    await loading.dismiss();
  }

}
