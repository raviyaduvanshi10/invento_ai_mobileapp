import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { InventoVisionService } from 'src/app/services/invento-vision.service';


@Component({
  selector: 'app-object-detection',
  templateUrl: './object-detection.page.html',
  styleUrls: ['./object-detection.page.scss'],
})
export class ObjectDetectionPage implements OnInit {

  selectedfeature: "LABEL_DETECTION";
  // submitted = false;
  counted;
  base64Data;
  converted_image;
  _image;
  imgId;
  binId;
  fabButtonId;
  actionButtonId;
  testArray;
  binNo;
  inventoryObject;
  clientId;

  constructor(public alertController: AlertController, private activatedRoute: ActivatedRoute,
    private vision: InventoVisionService, private cntdService: DataService,
    private router: Router, private _location: Location,
    public loadingController: LoadingController, private sanitizer: DomSanitizer,
    private camera: Camera, private route: ActivatedRoute) {
    console.log("Running")
  }

  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
  }



  async takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: false
    }
    this.camera.getPicture(options).then(async (imageData) => {
      const loading = await this.loadingController.create({
        message: 'Getting Results...',
        translucent: true
      });
      await loading.present();
      this.base64Data = imageData;
      this.converted_image = "data:image/jpeg;base64," + this.base64Data;
      const file = this.DataURIToBlob(this.converted_image);
      const formData = new FormData();
      formData.append('file', file, 'image.jpg')
      // Detecting Object
      this.vision.getLabels(formData).subscribe(async (result) => {

        let objectURL = URL.createObjectURL(result);
        this._image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        let _predict = this._image;
        console.log("working");
        console.log(_predict);
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     result: _predict
        //   }
        // }
        // this.route.navigate(["showclass"], navigationExtras);
        this.binId = document.getElementById("bin");
        this.binId.style.display = "none";
        this.fabButtonId = document.getElementById("fabButton");
        this.fabButtonId.style.display = "none";

        this.imgId = document.getElementById("predictImg");
        this.imgId.style.display = "block";
        this.actionButtonId = document.getElementById("actionButton");
        this.actionButtonId.style.display = "block";
        await loading.dismiss()
        console.log("dismiss");
      }, err => {
        console.log(err);
      });

      // Counting Object
      this.vision.objectCounting(formData).subscribe(data => {
        console.log(data.response);
        // this.num_object = data.response;
        // console.log(data.response);
        for (var val of data.response) {
          console.log(val.detections);
          var arr = [];
          for (var val1 of val.detections) {
            //console.log(val1.class);
            arr.push(val1.class);
          }
          console.log(arr);
          const counts = {};
          arr.forEach((x) => {
            counts[x] = (counts[x] || 0) + 1;
          });
          this.testArray = counts;
          console.log(this.testArray);
          this.testArray["total Object"] = val.total_object;
        }
        console.log(this.testArray);
        console.log("Counted");
        console.log("Dismiss");
      },
        error => console.log(error));

    }, err => {
      console.log(err);
    });
    console.log("Running Camera");
  }


  async selectPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }
    this.camera.getPicture(options).then(async (imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      const loading = await this.loadingController.create({
        message: 'Getting Results...',
        translucent: true
      });
      await loading.present();
      this.base64Data = imageData;
      this.converted_image = "data:image/jpeg;base64," + this.base64Data;
      const file = this.DataURIToBlob(this.converted_image);
      const formData = new FormData();
      formData.append('file', file, 'image.jpg')

      this.vision.getLabels(formData).subscribe(async (result) => {
        let objectURL = URL.createObjectURL(result);
        this._image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        let _predict = this._image;
        console.log("working");
        console.log(_predict);
        this.binId = document.getElementById("bin");
        this.binId.style.display = "none";
        this.fabButtonId = document.getElementById("fabButton");
        this.fabButtonId.style.display = "none";
        await loading.dismiss();
        this.imgId = document.getElementById("predictImg");
        this.imgId.style.display = "block";
        this.actionButtonId = document.getElementById("actionButton");
        this.actionButtonId.style.display = "block";
        console.log("dismiss");
      }, err => {
        console.log(err);
      });
      // Counting Object
      this.vision.objectCounting(formData).subscribe(data => {
        console.log(data.response);
        // this.num_object = data.response;
        // console.log(data.response);
        for (var val of data.response) {
          console.log(val.detections);
          var arr = [];
          for (var val1 of val.detections) {
            //console.log(val1.class);
            arr.push(val1.class);
          }
          console.log(arr);
          const counts = {};
          arr.forEach((x) => {
            counts[x] = (counts[x] || 0) + 1;
          });
          this.testArray = counts;
          console.log(this.testArray);
          this.testArray["total Object"] = val.total_object;
        }
        console.log(this.testArray);
        console.log("Counted");
        console.log("Dismiss");
      },
        error => console.log(error));


    }, err => {
      console.log(err);
    });
    console.log("Image selecting");
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Select one option ',
      message: 'Take Photo or Select from Galary!!!',
      buttons: [
        {
          text: 'Camera',
          role: 'camera',
          handler: () => {
            this.takePhoto();
          }
        }, {
          text: 'Gallary',
          role: 'gallary',
          handler: () => {
            this.selectPhoto();
          }
        }
      ]
    });
    await alert.present();
  }


  // radioGroupChange(event) {
  //   this.selectedfeature = event.detail;
  // }


  async ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.inventoryObject = JSON.parse(params['profile']);
        console.log('Got param: ', this.inventoryObject);

      }
    )
    // this.inventoryObject = this.activatedRoute.snapshot.paramMap.get('id');
    const { value } = await Storage.get({ key: "credential" });
    let auth = JSON.parse(value);
    console.log(auth);
    this.clientId = auth.id;
    console.log("clientid" + this.clientId);
  }

  back() {
    this._location.back();
  }


  async proceed() {
    const loading = await this.loadingController.create({
      message: 'Updating Results...',
      translucent: true
    });
    await loading.present();
    // this.submitted = true;
    try {
      const cntdQty = String(this.testArray["total Object"]);
      console.log(cntdQty);
      const { value } = await Storage.get({ key: "total_object" });
      console.log("Total_Object=" + JSON.parse(value));
      if (JSON.parse(value) == null) {
        Storage.set({ key: 'total_object', value: JSON.stringify(cntdQty) });
        console.log("If is working");
      }
      else {
        let total_object = Number(JSON.parse(value)) + Number(cntdQty);
        Storage.set({ key: 'total_object', value: JSON.stringify(total_object) });
        console.log("else is working");
      }
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message: `Current Product Order ${this.inventoryObject.prodDesc} has been counted.`,
        // header: `Current Warehouse Order ${this.inventoryObject.prodDesc} has been counted.`,

        buttons: [
          {
            text: 'Save Local',
            cssClass: 'secondary',
            handler: async () => {
              console.log('Save Local');
              this.imgId = document.getElementById("predictImg");
              this.imgId.style.display = "none";
              this.actionButtonId = document.getElementById("actionButton");
              this.actionButtonId.style.display = "none";
              this.binId = document.getElementById("bin");
              this.binId.style.display = "block";
              this.fabButtonId = document.getElementById("fabButton");
              this.fabButtonId.style.display = "block";
            }
          }, {
            text: 'Submit',
            handler: async () => {
              console.log('Confirm Ok');
              const { value } = await Storage.get({ key: "total_object" });
              console.log(JSON.parse(value));
              const bin = this.inventoryObject.binNo;
              const dict = {
                "countedObject": JSON.parse(value),
                "binNo": bin
              }
              console.log("submit:" + dict);
              this.cntdService.updateCntdObjt(this.clientId, dict).subscribe(data => {
                console.log(data);
                this.counted = data.status;
              },
                err => console.log(err));
              await Storage.remove({ key: 'total_object' });
              this.router.navigate(["/inventory"]);
            }
          }
        ]
      });
      await alert.present();

    }
    catch (e) {
      console.log(e);
      alert("Please take a valid picture. Thankyou !");
      this.back();
    }
    await loading.dismiss();
  }

  goto() {
    this.router.navigate(['/object-detection']);
  }
  color = 'primary';
  checked = false;

  async changed() {
    console.log(this.checked)

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: `Current Product Order ${this.inventoryObject.prodDesc} is empty.`,
      // header: `Current Warehouse Order ${this.inventoryObject.prodDesc} has been counted.`,

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            console.log('cancel');
            this.checked = false;
          }
        }, {
          text: 'Submit',
          handler: async () => {
            console.log('Confirm Ok');
            const dict = {
              "countedObject": 0,
              "binNo": this.inventoryObject.binNo
            }
            console.log("submit:" + dict);
            this.cntdService.updateCntdObjt(this.clientId, dict).subscribe(data => {
              console.log(data);
              this.counted = data.status;
            },
              err => console.log(err));
            this.router.navigate(["/inventory"]);
          }
        }
      ]
    });
    await alert.present();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

}
