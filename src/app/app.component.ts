import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Important events in Angular ';
  getData(val:string){
console.warn("Call function");
    
  }
}
