import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/interfaces';
import { OrdersDataService } from 'src/app/services/orders-data.service';




@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})



export class OrderListComponent implements OnInit {
  orders: Order [] = [];
  
  constructor(private ordersDataService: OrdersDataService) { }


  ngOnInit(): void {
    this.ordersDataService.getOrders().subscribe( respuesta => {
      this.orders = respuesta.sort((a,b) => {
        let aDate = new Date(a.fecha);
        let bDate = new Date(b.fecha)
        return bDate.getDate() - aDate.getDate()
      });
    });
  }

}
