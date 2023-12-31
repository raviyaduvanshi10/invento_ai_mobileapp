import { Component, OnInit, Input } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Message } from 'src/app/services/data.service';

@Component({
  selector: 'app-goods-issue-task',
  templateUrl: './goods-issue-task.component.html',
  styleUrls: ['./goods-issue-task.component.scss'],
})
export class GoodsIssueTaskComponent implements OnInit {
  @Input() message: Message;

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() { }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }



  showAlert = async () => {
    await Dialog.alert({
      title: 'Stop',
      message: 'this is an error',
    });
  };

  showConfirm = async () => {
    const { value } = await Dialog.confirm({
      title: 'Confirm',
      message: `Are you sure you'd like to press the red button?`,
    });

    console.log('Confirmed:', value);
  };

  showPrompt = async () => {
    const { value, cancelled } = await Dialog.prompt({
      title: 'Hello',
      message: `What's your name?`,
    });

    console.log('Name:', value);
    console.log('Cancelled:', cancelled);
  };

  goodsDetail(bin) {
    this.router.navigate(['/goods-detail', bin]);
    console.log(bin);
  }
  // async presentAlertPrompt(bin) {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Validate Storage Bin',
  //     inputs: [
  //       {
  //         label: 'Doc No',
  //         name: 'name1',
  //         type: 'text',
  //         placeholder: 'Enter Bin No ...',
  //       }

  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Confirm',
  //         handler: async (data) => {
  //           console.log('Confirm Ok');
  //           if (data.name1 == bin) {
  //             this.router.navigate(['/object-detection'],
  //               { queryParams: { profile: JSON.stringify(this.message) } });
  //           }
  //           else {
  //             const alert = await this.alertController.create({
  //               message: "You enetered wrong bin no. Please try again.",
  //               buttons: [
  //                 {
  //                   text: 'OK',
  //                   role: 'confirm',
  //                   cssClass: 'secondary',
  //                   handler: () => {
  //                     console.log('Confirm Ok');
  //                   }
  //                 }
  //               ]
  //             });
  //             await alert.present();
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  searchputaway() {
    this.router.navigate(["/showclass"])
  }

}
