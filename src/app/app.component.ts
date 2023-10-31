import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= '  Nested For loop ';
  users = [
    {name :'abdullah',  phone:'1111', socialAccounts:['fb','insta','snachat']},
    {name :'ahsan', phone:'2222',socialAccounts:['fb','insta','snachat']},
    {name :'bilal', phone:'3333',socialAccounts:['fb','insta','snachat']},
    {name :'anus',  phone:'4444',socialAccounts:['fb','insta','snachat']},
    {name :'mudabir', phone:'5555',socialAccounts:['fb','insta','snachat']},

  ]
 
}
