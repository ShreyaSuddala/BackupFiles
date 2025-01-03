import { Component, ElementRef, Input, ViewChildren ,QueryList} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message:string ="hello this is child component"

  changeMessage(newMessage:string){

    this.message=newMessage
    }

    @ViewChildren('h') hElements!: QueryList<ElementRef>;
    headings: string[] = [];
  
    test(): void {
      this.headings = this.hElements.map(elementRef => elementRef.nativeElement.innerText);
    }

}
