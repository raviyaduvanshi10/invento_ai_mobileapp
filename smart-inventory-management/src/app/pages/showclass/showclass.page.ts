import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-showclass',
  templateUrl: './showclass.page.html',
  styleUrls: ['./showclass.page.scss'],
})
export class ShowclassPage implements OnInit {

  favoriteSeason: string = 'Open';
  // seasons: string[] = ['Open', 'Open or Confirmed'];
  data: any = {
    "text": "Scan code "
  }
  seasons: any = [
    { "name": "Open", "checked": true },
    { "name": "Open or Confirmed", "checked": false }
  ]
  constructor(private route: ActivatedRoute, private router: Router,
    private sanitizer: DomSanitizer, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  qrScanner() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
      console.log(this.data);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  onSubmit() {
    alert("Filter applied");
    this.router.navigate(["/goods-issue"])
  }

}
