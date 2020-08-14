import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:"<app-counter></app-counter>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nbr: number=0;
  inc():void {this.nbr++;}
  dec():void {this.nbr--;}

}
