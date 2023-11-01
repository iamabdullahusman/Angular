import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title= ' Todo list in Angular';
  list:any[]=[];

  addtask(item:string){
  this.list.push({id:this.list.length,name:item});
  console.warn(this.list)
  }


  removetask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id)
  }
 
}
