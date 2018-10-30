import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent{
  public users: User[];

  constructor(http: Http) {
    http.get('/api/data').subscribe(result => {
      this.users = result.json() as User[];
    }, error => console.error(error));
  }
}

interface User {
  Name: string;
  Role: string;
  Status: string;
}
