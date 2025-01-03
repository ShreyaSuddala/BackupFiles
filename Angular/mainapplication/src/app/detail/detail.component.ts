import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  parentCategory: string | null = null;
  childCategory: string | null = null;
  subcategory: any = {};

  constructor(private route: ActivatedRoute, private dataService: DataserviceService) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.parentCategory = params['parent'];
      this.childCategory = params['child'];
      console.log('Query Params - Parent:', this.parentCategory, 'Child:', this.childCategory);
      this.loadCategoryData();
    });
  }
  
  loadCategoryData(): void {
    if (this.parentCategory && this.childCategory) {
      this.dataService.getData().subscribe((data) => {
        console.log('Fetched data:', data);
        const technologies = data.IT_Industry?.Technologies;
        if (technologies) {
          const parentKey = this.parentCategory as string;
          const childKey = this.childCategory as string;
          console.log('Technologies:', technologies);
          if (technologies[parentKey] && technologies[parentKey][childKey]) {
            this.subcategory = technologies[parentKey][childKey];
            console.log('Subcategory data:', this.subcategory);
          } else {
            console.error(`Category ${parentKey} or subcategory ${childKey} not found`);
          }
        } else {
          console.error('Technologies data not found');
        }
      });
    }
  }
  

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
