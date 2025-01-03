import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceapp';
  data: any = null;

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('https://fakestoreapi.com/products?limit=5')
      .subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
  }
}
