import { Component, NgModule } from '@angular/core';
// import { AppComponent } from './app.component';

@Component({
  selector: '.app-root',
// templateUrl: './app.component.html',

  //If only few lines of code can use template. notice back-ticks
  template: `

  <!-- <app-order></app-order> -->
  <app-products></app-products>
   <!-- <app-post></app-post> 

    {{1 +1+ getValue()}}
  -->

<br/>
<!-- <input [value]="expression"> -->
<!-- <input [value]="'expression'"> -->
<!-- <input [value]="getValue()" (blur)="leaveFocus()"> -->
<input [value]="getValue()" (input)="textChange($event)">

<br/>


   <!--
    <div>
      Content from inline
    {{title}}
    {{sayHello()}}
    </div>
    -->
  `,

// styleUrls: ['./app.component.css'] //a string array
//  Can also use an alternate for a few lines
   styles:[`
    div{
      background-color: #def 
    }
  `]
})
export class AppComponent {
  title = 'my-first-app for DT,';
  inactive = false;
  name = 'John'
  expression = 'Worship Happens'

  getValue(){
    return 77
  }

  // leaveFocus(){
  //   console.log('We are Done Here!')
  // }

  textChange(e:any){

    console.log('Here is input: ' + e.target.value)
  }

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