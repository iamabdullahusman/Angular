import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= '  Dynamic binding and style binding ';
  color = 'red';
  bgColor = 'purple';
  

  updateColor(){
    this.color='purple';
    this.bgColor='red';
  }
 
}
