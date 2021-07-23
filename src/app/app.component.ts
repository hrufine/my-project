import { Component } from '@angular/core';
import { random } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = 0;
  title = 'my-project';
  onClick(){
    this.number = random(1,10);
  }
}
