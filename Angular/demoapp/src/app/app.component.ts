import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'demoapp';
  data = 'hello';
  show = false;
  cities = ['Banglore','Hyderabad','Chennai'];
  se=true

  num1:number = 5;
  num2:number =6;


  operation:string='/';

  
}
