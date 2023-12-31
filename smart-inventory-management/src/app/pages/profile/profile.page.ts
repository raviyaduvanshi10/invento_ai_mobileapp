import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user;
  myDate;
  constructor() {
    setInterval(() => {
      //replaced function() by ()=>
      this.myDate = new Date();
      console.log(this.myDate);
      // just testing if it is working
    }, 1000);
  }

  async ngOnInit() {
    const { value } = await Storage.get({ key: 'credential' });
    var userDetail = JSON.parse(value);
    console.log(userDetail);
    this.user = userDetail.name;
    console.log(this.user);
  }

}
