import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { DataService, ScanMessage } from '../services/data.service';


@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message: ScanMessage;

  constructor(private datas: DataService, private activatedRoute: ActivatedRoute, public alertController: AlertController,
    private actionSheetController: ActionSheetController, private router: Router, private barcodeScanner: BarcodeScanner, private _location: Location) { }


  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.message = this.datas.getMessageById(parseInt(id));
    console.log("check : " + id);
    console.log("check 1 : " + this.message);
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }


  async moreAction() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Assigned or Unassigned Task',
        role: 'destructive',
        icon: 'person-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Cancel Putaway Task',
        icon: 'power',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  confirm() {
    // this.router.navigate(["/confirm-putawaytask"]);
    this.router.navigate([`/advance-slotting`]);
  }

  onSlideWillChange() {
    console.log("slide will change")
  }

  onSlideDidChange() {
    console.log("slide did change")
  }



  data: any = {
    "text": "Scan bin code "
  }
  data1: any = {
    "text": "Scan hu code "
  }
  data2: any = {
    "text": "Scan batch code "
  }

  binScanner() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
      console.log(this.data);
    }).catch(err => {
      console.log('Error', err);
    });
  }
  huScanner() {
    this.data1 = null;
    this.barcodeScanner.scan().then(barcodeData1 => {
      console.log('Barcode data', barcodeData1);
      this.data1 = barcodeData1;
      console.log(this.data1);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  batchScanner() {
    this.data2 = null;
    this.barcodeScanner.scan().then(barcodeData2 => {
      console.log('Barcode data', barcodeData2);
      this.data2 = barcodeData2;
      console.log(this.data2);
    }).catch(err => {
      console.log('Error', err);
    });
  }


  onSubmit() {
    this.router.navigate([`/advance-slotting`]);
  }

  cancel() {
    this._location.back();
  }




}
