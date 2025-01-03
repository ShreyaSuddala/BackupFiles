import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private jsonUrl = 'assets/data.json';


  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    console.log('Fetching data from:', this.jsonUrl);
    return this.http.get<any>(this.jsonUrl);
  }

  

}
