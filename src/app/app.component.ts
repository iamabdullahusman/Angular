import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title= ' Reuseable Component ';
  userDetails = [
    {name:'Abdullah',email:'Abdullah@test.com'},
    {name:'Ahsan',email:'Ahsan@test.com'},
    {name:'Anus',email:'Anus@test.com'},
    {name:'Bilal',email:'Bilal@test.com'},
  ]
  }
