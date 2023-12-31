import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

import { LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('touchstart')
  onTouchStart() {
    this.restartIdleLogoutTimer();
  }
  idleLogoutTimer;

  public appPages = [
    { title: 'Home', url: './home', icon: 'home-outline' },
    { title: 'Profile', url: '/profile', icon: 'person-outline' },
    // { title: 'Object Detection', url: '/objectdetection', icon: 'flash' },
    { title: 'Barcode', url: '/barcode', icon: 'barcode-outline' },
    { title: 'Contact Us', url: '/contactus', icon: "call-outline" },
    { title: 'About Us', url: '/about', icon: 'information-circle-outline' },
    { title: 'App Settings', url: '/settings', direct: 'forward', icon: 'cog-outline' }
    // { title: 'Inventory Count', url: '/inventory', icon: 'analytics' },
    // { title: ' Ionic Camera', url: '/native-camera', icon: 'camera' },
    // { title: 'Log out', url: '/login', icon: 'power-outline' },
  ];


  constructor(private loadingController: LoadingController, private router: Router,
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
  ) {
    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      // this.splashScreen();
    });
  }
  ngOnInit(): void {
    this.restartIdleLogoutTimer();
  }

  async splashScreen() {
    // Hide the splash (you should do this on app launch)
    await SplashScreen.hide();

    // Show the splash for an indefinite amount of time:
    await SplashScreen.show({
      autoHide: false
    });

    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true
    });

    await SplashScreen.hide();
  }

  restartIdleLogoutTimer() {
    clearTimeout(this.idleLogoutTimer);
    this.idleLogoutTimer = setTimeout(() => {
      this.logoutUser();
    }, 300000);
  }

  goToEditProgile() {
    alert("This functionality is still pending.")
  }

  async logoutUser() {
    const loading = await this.loadingController.create({
      message: 'Log Out ...',
      translucent: true,
      duration: 5000
    });
    await loading.present();
    console.log("log out");
    await Storage.remove({ key: 'credential' });
    const { value } = await Storage.get({ key: "credential" });
    const userDetail = JSON.parse(value);
    console.log(userDetail);
    await Storage.remove({ key: 'total_object' });
    this.router.navigate(["/"]);
    await loading.dismiss();

  }
}
