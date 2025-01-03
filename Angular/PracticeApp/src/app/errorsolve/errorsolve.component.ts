import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-errorsolve',
  template: `<button (click)="handleSubmit()">Click</button>`,
  styleUrls: ['./errorsolve.component.css']
})
export class ErrorsolveComponent {
  constructor(private sampleService: ServiceService) {}

  handleSubmit(): void {
    this.sampleService.addToCart('6', '1').subscribe({
      next: (data) => console.log("Response Data:", data),
      error: (error) => console.error("Error:", error),
    });
  }
}
