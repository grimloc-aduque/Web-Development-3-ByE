import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Order } from '../pages/order-list/order-list.component';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  constructor(private http: HttpClient) { }
  
  // private apiBaseUrl = 'http://localhost:3000/api';
  private apiBaseUrl = 'https://bye-bonitos-y-esponjositos.herokuapp.com/api';
  public getOrders(): Promise<Order[]>{
    const url: string = `${this.apiBaseUrl}/orders`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Order[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Algo salio mal con la coleccion de pedidos', error);
    return Promise.reject(error.message || error);
  }
}
