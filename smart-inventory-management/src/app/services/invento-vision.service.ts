import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InventoVisionService {
  constructor(private http: HttpClient) { }


  getLabels(formData: FormData) {
    // const formData = new FormData;
    // formData.append('file', base64Image);
    // const body = {
    //   "file": base64Image
    // }
    return this.http.post(`${environment.objUrl}/image`, formData, { responseType: 'blob' });
    //return this.http.post('https://ml.googleapis.com/v1/images:annotate?key=' + googlecloudvisionapi.firebaseConfig.apiKey, body);
  }

  objectCounting(formData: FormData): Observable<any> {
    return this.http.post(`${environment.objUrl}/detections`, formData);
  }
  objectClassification(objectData11: FormData): Observable<any> {
    return this.http.post(`${environment.objUrl}/image`, objectData11, { responseType: 'blob' });
  }


}