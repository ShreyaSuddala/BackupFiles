// import { Component, OnInit } from '@angular/core';
// import { DataserviceService } from '../dataservice.service';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent implements OnInit {
//   data: any = {}; 
//   isExpanded: { [key: string]: boolean } = {};

//   constructor(private dataService: DataserviceService) {}

//   ngOnInit(): void {
//     this.dataService.getData().subscribe((data) => {
//       this.data = data.IT_Industry?.Technologies;
//     });
//   }

//   toggleExpand(key: string): void {
//     this.isExpanded[key] = !this.isExpanded[key];
//   }

//   getKeys(obj: any): string[] {
//     return Object.keys(obj);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  data: any = {}; 
  isExpanded: { [key: string]: boolean } = {};

  constructor(private dataService: DataserviceService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data.IT_Industry?.Technologies;
    });
  }

  toggleExpand(key: string): void {
    this.isExpanded[key] = !this.isExpanded[key];
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  navigateToDetail(parentKey: string, childKey: string): void {
    this.router.navigate(['/detail'], { queryParams: { parent: parentKey, child: childKey } });
  }
}
