import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from 'src/app/services/orders-data.service';

export interface Order{
  _id: string;
  fullname: string;
  email: string;
  telefono: number;
  direccion: Direccion;
  productos: Producto[];
  status: string;
  fecha: string;
  __v: number;
}

interface Producto {
  nombre: string;
  cantidad: number;
  _id: string;
}

export interface Direccion {
  ciudad: string;
  calle_principal: string;
  calle_secundaria: string;
  numero_casa: string;
  referencia: string;
  _id: string;
}



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})



export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  
  constructor(private ordersDataService: OrdersDataService) { }

  private getOrders(): void{
    this.ordersDataService
      .getOrders()
        .then(foundOrders => this.orders = foundOrders);
  }

  ngOnInit(): void {
    this.getOrders();
  }

}
