import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title= ' Pass Data Child to Component ';
  data = 10;
  updateChild()
  {
   this.data=Math.floor(Math.random()*10)
  }
 
}
