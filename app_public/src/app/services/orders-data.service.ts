import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Order } from '../interfaces/interfaces';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  constructor(private http: HttpClient) { }
  
  // private url:string = 'http://localhost:3000/api/orders';
  private url = 'https://bye-bonitos-y-esponjositos.herokuapp.com/api';

  public getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.url);
  }

}
