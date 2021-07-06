import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home.component';
import { NoteComponent } from './note/note.component';
import { MidgetComponent } from './midget/midget.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';
import { AppCartComponent } from './project/app-cart/app-cart.component';
import { VehiclesComponent } from './vimalEx/vehicles/vehicles.component';
import { InventoryComponent } from './vimalEx/inventory/inventory.component';
import { ProductsComponent } from './project/app-cart/products/products.component';
import { OrderComponent } from './project/app-cart/order/order.component';

// import { RouterModule } from '@angular/router';
// import { ProductsComponent } from './products/products.component';

// import { SignupComponent } from './signup/signup.component'

// const appRoutes: Routes =[
//     {path:'', component:HomeComponent},
//     {path:'products',component:ProductsComponent}
//]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteComponent,
    MidgetComponent,
   // ProductsComponent,
    ProductComponent,
   PostComponent,
   AppCartComponent,
   VehiclesComponent,
   InventoryComponent,
   ProductsComponent,
   OrderComponent
 //   SignupComponent
  
  ],
  imports: [
    BrowserModule,
  //  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
