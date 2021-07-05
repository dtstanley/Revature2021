import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home.component';
import { NoteComponent } from './note/note.component';
import { MidgetComponent } from './midget/midget.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';

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
   PostComponent
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
