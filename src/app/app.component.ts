import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title= ' pipes in angular ';
  today = Date();
  capString(item:string)
  {
    return item.toUpperCase();
    
  }
  
}
