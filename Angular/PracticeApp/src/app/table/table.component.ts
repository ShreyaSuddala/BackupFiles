import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  cities = ['hyd','bnglr']

 @Input() d1 :number[]=[];

 @Input() d2:string='';

 

}
