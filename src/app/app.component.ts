import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title= ' Angular Template Driven Form';
  userLogin(item:any)
  {
    console.warn(item);
  }

}
