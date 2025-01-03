import { Component ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  sendNotification() {
    this.notifyParent.emit('Button clicked in child component');
  }

  email = ""
UpdateEmail(inp:string){

  this.email =inp

}
color=""


}
