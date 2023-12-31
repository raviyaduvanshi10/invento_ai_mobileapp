import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-goods-issue',
  templateUrl: './goods-issue.page.html',
  styleUrls: ['./goods-issue.page.scss'],
})
export class GoodsIssuePage implements OnInit {

  color1 = "primary";
  color2 = "primary";
  color3 = "primary";
  allData = [];
  pendingData = [];
  clientId;
  pendingId;
  allId;
  constructor(private data: DataService) { }

  pending() {
    this.color1 = "dark";
    this.color2 = "primary";
    this.color3 = "primary";
    this.allId = document.getElementById("all");
    this.allId.style.display = "none";
    this.pendingId = document.getElementById("pending");
    this.pendingId.style.display = "block";
    this.pendingData = [];
    this.pendingData = this.data.getScanningMessages();
    // this.data.getAllMessages(this.clientId).subscribe(data => {
    //   for (var val of data) {
    //     console.log(val.cntdQty);
    //     if (val.cntdQty == "--") {
    //       this.pendingData.push(val);
    //     }
    //   }
    //   console.log(this.pendingData);
    // });
  }
  all() {
    this.color1 = "primary";
    this.color2 = "dark";
    this.color3 = "primary";
    this.pendingId = document.getElementById("pending");
    this.pendingId.style.display = "none";
    this.allId = document.getElementById("all");
    this.allId.style.display = "block";
    this.allData = [];
    this.data.getAllMessages(this.clientId).subscribe(data => {
      for (var val of data) {
        console.log(val);
        this.allData.push(val);
      }
      console.log(this.allData);
    });

  }
  counted() {
    this.color1 = "primary";
    this.color2 = "primary";
    this.color3 = "dark"
    this.pendingId = document.getElementById("pending");
    this.pendingId.style.display = "none";
    this.allId = document.getElementById("all");
    this.allId.style.display = "block";
    this.allData = [];
    this.data.getAllMessages(this.clientId).subscribe(data => {
      for (var val of data) {
        console.log(val);
        if (val.cntdQty != "--") {
          this.allData.push(val);
        }
      }
      console.log(this.allData);
    });
  }


  async ngOnInit() {
    // this.refresh("Refresh")
    const { value } = await Storage.get({ key: "credential" });
    let auth = JSON.parse(value);
    console.log(auth);
    // this.clientId = auth.id;
    // console.log("clientid" + this.clientId);
    this.pendingId = document.getElementById("pending");
    this.pendingId.style.display = "block";
    this.pending();
  }

  refresh(data) {

  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }


}
