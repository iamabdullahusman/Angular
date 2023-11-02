import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title= ' Send Data Child to parent Component  ';
  data="x";
  updateData(item:string){
    console.warn(item)
    this.data=item;

  }
  
  
  }
