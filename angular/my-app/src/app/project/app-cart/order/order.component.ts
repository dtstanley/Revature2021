import { Component, OnInit } from '@angular/core';
import { OrderSvc } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

    items =[]
    totalPrice = 0

  constructor(private oService:OrderSvc) { }

  ngOnInit(): void {
     this.oService.getItems().subscribe((data:[])=>{
     console.log('data received ', data)
      this.items = data
      let total =0
      this.items.forEach(i=>{
        total+=i.totalPrice
      })
      this.totalPrice = total
   });
 }

}
