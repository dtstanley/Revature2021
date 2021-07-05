import { Component, NgModule } from '@angular/core';
// import { AppComponent } from './app.component';

@Component({
  selector: '.app-root',
 templateUrl: './app.component.html',

  //If only few lines of code can use template. notice back-ticks
  // template: `
  //   <div>
  //   <!--  Content from inline -->
  //   {{title}}
  //   {{sayHello()}}
  //   </div>
  // `,

  styleUrls: ['./app.component.css'] //a string array
  //Can also use an alternate for a few lines
  //  styles:[`
  //   div{
  //     background-color: #def
  //   }
  // `]
})
export class AppComponent {
  title = 'my-first-app for DT,';
  inactive = false;
  name = 'John'

  submit(){
    console.log(' sumitting a form ')
  }

  changeNameHandler(e:any){
    console.log (typeof e)
    console.log(this.name = e.target.value)
  }

  sayHello(){
    return ' Hi there, from DT '
  };

  year = 1337;
  myObject = {name: 'Tina', status:'Awesome'};
  onClick() {
    console.log("Button was clicked.");
  }
  first_name = "Tom";
}


// searchTest(elem:HTMLInputElement){
//   console.log(elem.value)
// }

// @NgModule