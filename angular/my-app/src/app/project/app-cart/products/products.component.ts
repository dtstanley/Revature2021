import { Component, OnInit } from '@angular/core';
import { OrderSvc } from '../order/order.service';
import { ProductSvc } from './products.services';

@Component({
  selector: 'app-products',
   templateUrl: './products.component.html',

  // template:`
  // `,

  //styleUrls: ['./products.component.css']

   styles:[`
   .your-cart {
    background-color:pink;
}
    .nav-tabs {
  background-color:grey;
}

.billing {
  background-color:lightgreen;
}
 
   `],
})
export class ProductsComponent{

    products =[]
 
   constructor(private pService:ProductSvc, private oService:OrderSvc){
 
   }
 
   ngOnInit(){
    return this.products = this.pService.getProds()
   }
 
    filterItems(e){
      console.log(e.target.value)
       this.products = this.pService.filter(e.target.value)
    }
 
    setFavorite(v){
     this.pService.updateFav(v.id)
   }
 
   addToOrder(v){
     this.oService.add(v)
   }
  }
