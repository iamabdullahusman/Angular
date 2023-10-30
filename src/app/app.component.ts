import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Get Input Box Value ';
  displayVal = 'Abdullah Usman';
  getValue(val:string){
   console.warn(val)
   this.displayVal=val
  }
}
