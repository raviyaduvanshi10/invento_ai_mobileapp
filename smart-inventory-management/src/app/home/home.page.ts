import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { AlertController, MenuController, ModalController, NavController, Platform, PopoverController, ToastController } from '@ionic/angular';
import { NotificationComponent } from '../components/notification/notification.component';
// import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchKey = '';
  yourLocation = '123 Test Street';
  // themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  homePage = [];
  // constructor(private data: DataService) {}
  constructor(public navCtrl: NavController, private platform: Platform,
    public menuCtrl: MenuController, private _location: Location,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this._location.back();
    //   console.log("Hardware was called");
    // });
  }

  async ngOnInit() {
    console.log("This is Home page.");
    const { value } = await Storage.get({ key: "credential" });
    let auth = JSON.parse(value);
    console.log(auth);

    console.log("clientid" + auth.id);

    for (let key in auth.roles) {
      let value = auth.roles[key];
      if (value == true) {
        if (key == "advanceslotting") {
          // this.menuItems.push("Advance Slotting");
          // this.icons.push("analytics-sharp");
          // this.routerLink.push("['../advance-slotting']")
          this.homePage.push(
            {
              "title": "Goods Issue",
              "url": "../goods-issue",
              "icon": "layers"
            }
          )
        }

        else if (key == "barcodescanner") {
          // this.menuItems.push("Barcode");
          // this.icons.push("barcode-sharp")
          // this.routerLink.push("['../barcode']")
          this.homePage.push(
            {
              "title": "Goods Receipt",
              "url": "/goods-receive",
              "icon": "barcode-sharp"
            }
          )
        }

        else if (key == "inventorycount") {
          // this.menuItems.push("Inventory Count");
          // this.icons.push("create-sharp");
          // this.routerLink.push("['../inventory']")
          this.homePage.push(
            {
              "title": "Inventory Count",
              "url": "../inventory",
              "icon": "create-sharp"
            }
          )
        }

      }
    }

  }




  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  // getMessages(): Message[] {
  //   return this.data.getMessages();
  // }


  gotoInventory() {
    console.log("Hi");
  }

  searchFilter() {

  }



  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              // closeButtonText: 'OK',
              // showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  // async searchFilter() {
  //   const modal = await this.modalCtrl.create({
  //     component: SearchFilterPage
  //   });
  //   return await modal.present();
  // }

  // async presentImage(image: any) {
  //   const modal = await this.modalCtrl.create({
  //     component: ImagePage,
  //     componentProps: { value: image }
  //   });
  //   return await modal.present();
  // }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }


}
