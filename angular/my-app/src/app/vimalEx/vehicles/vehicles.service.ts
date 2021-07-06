import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class VehiclesService{
    vehicles = [{brand: 'Audi', model:'A5', type: 'car', miles:20000, fav:true},
    {brand: 'Ford', model:'F-150', type: 'truck',  miles:10000, fav:false},
    {brand: 'Honda', model:'Civic', type: 'car',  miles:37000, fav:false},
    {brand: 'Kia', model:'Stinger', type: 'car',  miles:12000, fav:false},
    {brand: 'Toyota', model:'Avalon', type: 'car',  miles:4300, fav:false},
    {brand: 'BMW', model:'X5', type: 'suv',  miles:28200, fav:false}]

    getVehicles(){
        return this.vehicles
    }

    filter(type){
        return this.vehicles.filter(v=>v.type === type)
    }

    updateFav(brand){
        this.vehicles.forEach(v => {
            if(v.brand === brand){
                v.fav = !v.fav  //toggles
            }
        })

    }
}