import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class InventoryService{
    items = new Subject()
    temp = []


    add(vehicle){
        this.temp.push(vehicle)
        this.items.next(this.temp)
    
    //    console.log(this.items)
    }

    // vehicles = [{brand: 'Audi', model:'A5', type: 'car', miles:20000, fav:true},
    // {brand: 'Ford', model:'F-150', type: 'truck',  miles:10000, fav:false},
    // {brand: 'Honda', model:'Civic', type: 'car',  miles:37000, fav:false},
    // {brand: 'Kia', model:'Stinger', type: 'car',  miles:12000, fav:false},
    // {brand: 'Toyota', model:'Avalon', type: 'car',  miles:4300, fav:false},
    // {brand: 'BMW', model:'X5', type: 'suv',  miles:28200, fav:false}]

    getItems(){
        return this.items
    }

    // filter(type){
    //     return this.vehicles.filter(v=>v.type === type)
    // }

    // updateFav(brand){
    //     this.vehicles.forEach(v => {
    //         if(v.brand === brand){
    //             v.fav = !v.fav  //toggles
    //         }
    //     })

    // }
}