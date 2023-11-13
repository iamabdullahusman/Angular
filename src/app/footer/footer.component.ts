import { Component , OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public getJasonValue:any;
  public postJasonValue:any;
  constructor(private http:HttpClient)
  {
   
  }
  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }
  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/2').subscribe((data)=>{
      console.log(data);
      this.getJasonValue = data;
    }
);
}
public postMethod(){
  const header = new HttpHeaders({
    contentType: 'application/json'
  })
  let body = {
    title: 'Quick ',
    body: 'Programming',
    userId: 1,
  };
  this.http.post('https://jsonplaceholder.typicode.com/posts', body,{headers: header}).subscribe((data)=>{
    console.log(data);
    this.postJasonValue = data;
  }
);
}

}
