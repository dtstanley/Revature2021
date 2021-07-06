import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  //templateUrl: './inventory.component.html',
  template:`
    <h1>Inventory</h1>
    <p *ngFor="let i of items">{{i.brand}}</p>
    <p>Total Miles: {{totalMiles}}</p>
  `,

  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent {

    items =[]
    totalMiles = 0

  constructor(private iService:InventoryService) { }

  ngOnInit(): void {
   // this.items = this.iService.getItems();

   this.iService.getItems().subscribe((data:[])=>{
     console.log('data received ', data)
      this.items = data
      let total =0
      this.items.forEach(i=>{
        total+=i.miles
      })
      this.totalMiles = total
   });
 }

}
