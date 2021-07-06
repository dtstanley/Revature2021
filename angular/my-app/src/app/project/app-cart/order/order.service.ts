import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class OrderSvc{
    items = new Subject()
    temp = []


    add(products){
        this.temp.push(products)
        this.items.next(this.temp)
    
        console.log(this.items)
    }

  

    getItems(){
        return this.items
    }
}