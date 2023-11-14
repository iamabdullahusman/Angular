import { Component , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl , FormGroup , FormControlName , Validators } from '@angular/forms'
interface dataType{
  name:string,
  age:Number,
  pakistani:Boolean,
  Address:any
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title= ' Model and Interface ';
  getData()
  {
    const data:dataType={
      name: 'Abdullah',
      age: 23,
      pakistani: true,
      Address: ' 44 , Lahore'
    }
    return data;
    
  }

  

}
