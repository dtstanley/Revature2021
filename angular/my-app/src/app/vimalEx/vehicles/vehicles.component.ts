// import { Component, OnInit } from '@angular/core';
import { Component } from "@angular/core";
import { never } from "rxjs";
import { InventoryService } from "../inventory/inventory.service";
import { VehiclesService } from "./vehicles.service";
@Component({
  selector: 'app-vehicles',
  // templateUrl: './vehicles.component.html',
  template: `
    <h1>Vehicles<h1>

     <select (change)="filterItems($event)"> 
    <!-- <select>="filterItems($event.target.value)"> -->
    <option>type</option>
    <option>car</option>
    <option>suv</option>
    <option>truck</option>
    </select>

    <div [ngClass]="{favorite:v.fav}"  *ngFor="let v of vehicles"><h6>{{v.brand}} {{v.model}} {{v.type}} {{v.miles}}</h6>
    <button (click) ="setFavorite(v)">Favorite</button>
    <button (click) ="addToInv(v)">Add Inventory</button>
    </div>
  `,
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

   vehicles =[]

  constructor(private vService:VehiclesService, private iService:InventoryService){

  }

  ngOnInit(){
   return this.vehicles = this.vService.getVehicles()
  }

   filterItems(e){
     console.log(e.target.value)
      this.vehicles = this.vService.filter(e.target.value)
   }

   setFavorite(v){
    this.vService.updateFav(v.brand)
  }

  addToInv(v){
    this.iService.add(v)
  }
}
