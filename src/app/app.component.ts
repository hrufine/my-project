import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootItems = ["banana","apple","cherries"];
  title = 'my-project';
  onItemWasAdded(item){
    this.rootItems.push(item);
    console.log(this.rootItems);
  }
}
