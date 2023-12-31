import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// export interface Message {
//   fromName: string;
//   subject: string;
//   date: string;
//   id: number;
//   read: boolean;
// }

export interface Message {
  docNo: string;
  date: string;
  time: string;
  id: number;
  binNo: number;
  read: boolean;
}
export interface ScanMessage {
  taskNo: string
  docNo: string;
  date: string;
  time: string;
  hu: string;
  batch: string;
  id: number;
  product: string;
  read: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // public messages: Message[] = [
  //   {
  //     fromName: 'Matt Chorsey',
  //     subject: 'New event: Trip to Vegas',
  //     date: '9:32 AM',
  //     id: 0,
  //     read: false
  //   },
  //   {
  //     fromName: 'Lauren Ruthford',
  //     subject: 'Long time no chat',
  //     date: '6:12 AM',
  //     id: 1,
  //     read: false
  //   },
  //   {
  //     fromName: 'Jordan Firth',
  //     subject: 'Report Results',
  //     date: '4:55 AM',
  //     id: 2,
  //     read: false
  //   },
  //   {
  //     fromName: 'Bill Thomas',
  //     subject: 'The situation',
  //     date: 'Yesterday',
  //     id: 3,
  //     read: false
  //   },
  //   {
  //     fromName: 'Joanne Pollan',
  //     subject: 'Updated invitation: Swim lessons',
  //     date: 'Yesterday',
  //     id: 4,
  //     read: false
  //   },
  //   {
  //     fromName: 'Andrea Cornerston',
  //     subject: 'Last minute ask',
  //     date: 'Yesterday',
  //     id: 5,
  //     read: false
  //   },
  //   {
  //     fromName: 'Moe Chamont',
  //     subject: 'Family Calendar - Version 1',
  //     date: 'Last Week',
  //     id: 6,
  //     read: false
  //   },
  //   {
  //     fromName: 'Kelly Richardson',
  //     subject: 'Placeholder Headhots',
  //     date: 'Last Week',
  //     id: 7,
  //     read: false
  //   }
  // ];


  public allMessages: Message[] = [
    // {
    //   docNo: '|| Doc No #600032',
    //   date: '2021-03-04',
    //   time: '9:32 AM',
    //   id: 0,
    //   read: false
    // },
    // {
    //   docNo: '|| Doc No #600052',
    //   date: '2021-04-04',
    //   time: '9:34 AM',
    //   id: 1,
    //   read: false
    // },
    // {
    //   docNo: '|| Doc No #700032',
    //   date: '2021-01-14',
    //   time: '5:32 AM',
    //   id: 2,
    //   read: false
    // },
    // {
    //   docNo: '|| Doc No #700082',
    //   date: '2021-07-24',
    //   time: '7:32 AM',
    //   id: 3,
    //   read: false
    // },
    // {
    //   docNo: '|| Doc No #401032',
    //   date: '2021-01-14',
    //   time: '5:42 AM',
    //   id: 4,
    //   read: false
    // },
    // {
    //   docNo: '|| Doc No #421032',
    //   date: '2021-02-24',
    //   time: '5:22 AM',
    //   id: 5,
    //   read: false
    // },
    // {
    //   docNo: '|| Doc No #401082',
    //   date: '2021-09-14',
    //   time: 'Last Week',
    //   id: 6,
    //   read: false
    // },
    {
      docNo: '|| Doc No #401022',
      date: '2021-03-13',
      time: '100 PC',
      id: 7,
      binNo: 10,
      read: false
    }
  ];

  public scanMessage: ScanMessage[] = [
    {
      taskNo: 'Task # 100000781',
      docNo: 'SB01-01',
      date: '2021-01-14',
      time: '10:12 AM',
      hu: "4567890123",
      batch: '#Item1',
      id: 0,
      product: "TG2 Trad.Good 12",
      read: false
    },
    {
      taskNo: 'Task # 100000782',
      docNo: 'SB01-02',
      date: '2021-07-24',
      time: '10:12 AM',
      hu: "4567890124",
      batch: '#Item2',
      product: "TG3 Trad.Good 13",
      id: 1,
      read: false
    },
    {
      taskNo: 'Task # 100000783',
      docNo: 'SB01-03',
      date: '2021-01-14',
      time: '10:12 AM',
      hu: "4567890125",
      batch: '#Item3',
      product: "TG4 Trad.Good 14",
      id: 2,
      read: false
    },
    {
      taskNo: 'Task # 100000784',
      docNo: 'SB01-04',
      date: '2021-02-24',
      time: '10:12 AM',
      hu: "4567890126",
      batch: '#Item4',
      product: "TG5 Trad.Good 15",
      id: 3,
      read: false
    },
    {
      taskNo: 'Task # 100000785',
      docNo: 'SB01-05',
      date: '2021-09-14',
      time: '10:12 AM',
      hu: "4567890127",
      batch: '#Item5',
      product: "TG6 Trad.Good 16",
      id: 4,
      read: false
    },
    {
      taskNo: 'Task # 100000786',
      docNo: 'SB01-06',
      date: '2021-03-13',
      time: '10:12 AM',
      hu: "4567890128",
      batch: '#Item6',
      product: "TG7 Trad.Good 17",
      id: 5,
      read: false
    },
    {
      id: 6,
      taskNo: 'Task # 100000787',
      docNo: 'SB01-07',
      date: '2021-04-13',
      time: '10:12 AM',
      hu: "4567890129",
      batch: '#Item7',
      product: "TG8 Trad.Good 18",
      read: false
    },
    {
      id: 7,
      taskNo: 'Task # 100000788',
      docNo: 'SB01-08',
      date: '2021-03-15',
      time: '10:12 AM',
      hu: "4567890120",
      batch: '#Item8',
      product: "TG9 Trad.Good 19",
      read: false
    }
  ];

  // public countedMessages: Message[] = [

  //   {
  //     docNo: '|| Doc No #700032',
  //     date: '2021-01-14',
  //     time: '5:32 AM',
  //     id: 2,
  //     read: false
  //   },
  //     {
  //   docNo: '|| Doc No #700082',
  //     date: '2021-07-24',
  //       time: '7:32 AM',
  //         id: 3,
  //           binNo: 2,
  //             read: false
  // }
  //   ]


  constructor(private http: HttpClient) { }

  async getClientId() {
    const { value } = await Storage.get({ key: "credential" });
    return JSON.parse(value);
  }
  getAllMessages(id: string): Observable<any> {
    return this.http.get(`${environment.inventoServer}/inventory/${id}`);
  }

  public getMessageById(id: number): ScanMessage {
    return this.scanMessage[id];
  }

  public getScanningMessages(): ScanMessage[] {
    return this.scanMessage;
  }
  public getPendingMessagesById(id: number): Message {
    return this.allMessages[id];
  }
  // public getCountedMessages(): Message[] {
  //   return this.countedMessages;
  // }
  public getCountedMessagesById(id: number): Message {
    return this.allMessages[id];
  }
  updateCntdObjt(id: string, cntdQty: Object): Observable<any> {
    return this.http.post(`${environment.inventoServer}/objectcounted/${id}`, cntdQty);
  }
}