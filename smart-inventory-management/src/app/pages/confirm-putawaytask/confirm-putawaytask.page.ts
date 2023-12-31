import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-confirm-putawaytask',
  templateUrl: './confirm-putawaytask.page.html',
  styleUrls: ['./confirm-putawaytask.page.scss'],
})
export class ConfirmPutawaytaskPage implements OnInit {
  data: any = {
    "text": "Scan bin code "
  }
  data1: any = {
    "text": "Scan hu code "
  }
  data2: any = {
    "text": "Scan batch code "
  }

  constructor(private router: Router, private barcodeScanner: BarcodeScanner, private _location: Location) { }

  ngOnInit() {
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
