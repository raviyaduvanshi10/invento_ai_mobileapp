import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoadingController, Platform } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

import { NavController, MenuController, ToastController, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted = false;
  userForm = { userName: '', password: '' };
  loginForm: FormGroup;
  login: Login;

  constructor(private router: Router, private loginServices: LoginService, private _location: Location,
    private loadingController: LoadingController, private platform: Platform,
    public navCtrl: NavController, private fb: FormBuilder,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    this.platform.backButton.subscribeWithPriority(10, async () => {

      if (_location.path() === "/login" || _location.path() === "login") {
        const alert = await this.alertCtrl.create({
          header: 'Exit App?',
          message: 'Are you sure you want to close the app?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'Yes',
              handler: async () => {
                const loader = await this.loadingCtrl.create({
                  duration: 2000
                });

                loader.present();
                navigator['app'].exitApp();
                console.log("Hardware button is called and app is exit.");
                loader.dismiss();
              }
            }
          ]
        });

        await alert.present();
      }


      else if (_location.path() === "/home" || _location.path() === "home") {
        const alert = await this.alertCtrl.create({
          header: ' Logout user?',
          message: 'Are you sure you want log out?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'Yes',
              handler: async () => {
                const loader = await this.loadingCtrl.create({
                  duration: 2000
                });

                loader.present();
                // navigator['app'].exitApp();
                console.log("log out");
                await Storage.remove({ key: 'credential' });
                const { value } = await Storage.get({ key: "credential" });
                const userDetail = JSON.parse(value);
                console.log(userDetail);
                await Storage.remove({ key: 'total_object' });
                this.router.navigate(["/login"]);
                console.log("Hardware button is called and user is logout.");
                loader.dismiss();
              }
            }
          ]
        });

        await alert.present();
      }


      else {
        this._location.back();
        console.log("Hardware was called");
      }
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }


  ngOnInit() {
    this.createForm();
  }


  formErrors = {
    'userName': '',
    'password': ''
  };

  validationMessages = {
    'userName': {
      'required': 'Username is required.',
      'minlength': 'Username must be at least 5 characters long.',
      'maxlength': 'Username cannot be more than 25 characters long.'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password must be at least 6 characters long.',
      'maxlength': 'Password cannot be more than 25 characters long.'
    }
  };


  createForm() {

    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
    });


    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }





  onSubmit() {
    this.submitted = true;
    this.login = this.loginForm.value;
    console.log(this.login);
    this.signIn();
  }

  async signIn() {
    const loading = await this.loadingController.create({
      message: 'Log In ...',
      translucent: true,
      duration: 5000
    });
    await loading.present();
    this.loginServices.login(this.login).subscribe(async (data) => {

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
    this.loginForm.reset();
    await loading.dismiss();
  }



  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                // showCloseButton: true,

                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
