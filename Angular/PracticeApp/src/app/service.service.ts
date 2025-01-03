
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:8086/cart/add';

  constructor(private http: HttpClient) {}

  addToCart(productIds: string, userId: string): Observable<any> {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaHJleWEyN0BnbWFpbC5jb20iLCJpYXQiOjE3MzAyNzAxMjIsImV4cCI6MTczMDI3MTkyMn0.foDMGpjro1iCIWZN1UrQoX68dlLXEAD97--5f1ZHKSXzXVEGxlqmBBN8OH4zzM89kHDH-YbhHyB4oeE4AjzWZA'
    });
    
    const params = { productIds, userId };

    return this.http.post<any>(this.apiUrl, {}, { headers, params });
  }
}
