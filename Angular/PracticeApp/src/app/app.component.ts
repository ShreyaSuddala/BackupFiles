import { Component, ViewChild,ElementRef } from '@angular/core';

import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeApp';
  test = "testing"

  Num = [10,80,90,65]

  name="shreya"

 handleNotification(message: string) {
    alert(message);
  }


  @ViewChild("t") t! :ElementRef;

  ChangeColor(){
    this.t.nativeElement.style.backgroundColor="red"
  }

 @ViewChild(ChildComponent) childcomp ! : ChildComponent

 UpdateMessage(){
  this.childcomp.changeMessage("hello this is from parent component")
 }
 






}
