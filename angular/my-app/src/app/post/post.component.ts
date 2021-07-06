import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
   templateUrl: './post.component.html',
//   template:`
// <div>
//     <h4>{{title}}</h4>
//     <button (click)="toggleDesc()">Toggle</button>
//   <!--  <div style="display:none"> -->
//   <!--  <div [style.display]="'none'">  property binding of the style-->
//   <br/>
//   <label [style.font-size.px]="size">Font Size: {{size}} </label>
//         <div [style.display]="show ? 'inline' : 'none'">
//         This is the description area... 
//         This is the description area... 
//         This is the description area... 
//         This is the description area... 
//         This is the description area...
//     </div>
// </div>

// `, 

  styleUrls: ['./post.component.css'] 
}) 
  
 export class PostComponent {

  title:string = 'This is a sample post componnent'
  show:boolean= false   // true or false
  size:number = 34

  toggleDesc(){ 
    // console.log('Toggle')
    //this.show = !this.show 
    //this.show = !this.show ? true : false
    this.show = this.show ? false : true
  }
}


