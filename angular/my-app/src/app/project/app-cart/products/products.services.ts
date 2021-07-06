import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class ProductSvc{
    products = [{id: 6849215, title:'Lenovo Personal Computer', category: 'electronics', price:2159, fav:true},
    {id: 88258736425, title:'sofa', category: 'furniture', price:3714, fav:false},
    {id: 14987177, title:'Nike Sneakers ', category: 'clothing', price:65.99, fav:false},
    {id: 225783, title:'Honey Baked Ham ', category: 'food', price:20.55, fav:true},
    {id: 200986, title:' Austi-Spumante Wine', category: 'food', price:43.97, fav:false},
    {id: 1945969, title:'Lee Jeans ', category: 'clothing', price:22, fav:false},
    {id: 6731911, title:'USB Thumb-drive ', category: 'electronics', price:15.95, fav:false},
    {id: 777196, title:' Believe For It-by CeCe Winans', category: 'music', price:12.98, fav:true},
    {id: 775332, title:'Best of Sting-by Sting ', category: 'music', price:35.99, fav:false},
    {id: 6675682, title:' Sony Digital Recorder', category: 'electronics', price:21.59, fav:false},
    {id: 584150, title:'SAS Survival Guide', category: 'books', price:8.97, fav:false},
    ]

    getProds(){
        return this.products
    }

    filter(category){
        return this.products.filter(v=>v.category === category)
    }

    updateFav(id){
        this.products.forEach(v => {
            if(v.id === id){
                v.fav = !v.fav  //toggles
            }
        })

    }
}